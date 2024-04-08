import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {IBook} from "../book";
import {AsyncPipe, CommonModule} from "@angular/common";
import {BookCardComponent} from "../book-card/book-card.component";
import {BookFilterPipe} from "../book-filter/book-filter.pipe";
import {BookApiService} from "../book-api.service";
import {Observable, Subscription} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, BookCardComponent, BookFilterPipe],
  providers: [BookApiService],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  private subscription = Subscription.EMPTY
  private bookApiService = inject(BookApiService)
  books$: Observable<IBook[]> = this.bookApiService.getAll();
  bookSearchTerm?: string;
  private destroyRef = inject(DestroyRef)

  // ngOnInit() {
  //   // console.log("susubscription2"bscription", this.subscription)
  //   //     // this.subscription = this.bookApiService.getAll().subscribe({
  //   //     //   next: data => this.books = data,
  //   //     // })
  //   //     // console.log(", this.subscription)
  //
  //   this.bookApiService.getAll().pipe(
  //       takeUntilDestroyed(this.destroyRef)
  //   ).subscribe({
  //       next: data => this.books$ = data,
  // })
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

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
