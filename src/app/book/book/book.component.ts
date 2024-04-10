import {Component, computed, DestroyRef, inject, Signal} from '@angular/core';
import {IBook} from "../book";
import {AsyncPipe, CommonModule} from "@angular/common";
import {BookCardComponent} from "../book-card/book-card.component";
import {BookFilterPipe} from "../book-filter/book-filter.pipe";
import {BookApiService} from "../book-api.service";
import {Observable, Subscription} from "rxjs";
import {Router, RouterLink} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, BookCardComponent, BookFilterPipe, RouterLink],
  providers: [BookApiService],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  private subscription = Subscription.EMPTY
  private bookApiService = inject(BookApiService)
  private router = inject(Router);
  // books$: Observable<IBook[]> = this.bookApiService.getAll();
  books: Signal<IBook[]> = toSignal(this.bookApiService.getAll(), {initialValue: []});
  numberOfBooks: Signal<number> = computed(()=>this.books().length)
  bookSearchTerm?: string;
  goToBookDetails(book: IBook) {
    console.log(book)
    this.router.navigate(['books', 'detail', book.isbn])
  }

  updateBookSearchTerm(e: Event): string {
    this.bookSearchTerm = (e.target as HTMLInputElement).value
    return this.bookSearchTerm
  }
}
