import {Component, inject} from '@angular/core';
import {IBook} from "../book";
import {CommonModule} from "@angular/common";
import {BookCardComponent} from "../book-card/book-card.component";
import {BookFilterPipe} from "../book-filter/book-filter.pipe";
import {BookApiService} from "../book-api.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, BookCardComponent, BookFilterPipe],
  providers: [BookApiService],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  private bookApiService = inject(BookApiService)
  books: IBook[] = [];
  bookSearchTerm?: string;

  constructor() {
    this.bookApiService.getAll().subscribe({
      next: (data) => (this.books = data),
      complete: () => console.log("Fertig"),
    })
  }


  booksContainer = {
    display: 'flex',
    flexDirection: 'column',
    border: 'solid 2px black',
    width: '500px',
    alignItems: 'center'
  }
  inputStyle = {
    margin: '10px',
    padding: '10px',
    width: '180px'
  }

  goToBookDetails(book: IBook) {
    console.table(book)
  }

  updateBookSearchTerm(e: Event): string {
    this.bookSearchTerm = (e.target as HTMLInputElement).value
    return this.bookSearchTerm
  }
}
