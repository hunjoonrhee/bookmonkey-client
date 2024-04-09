import {Component, inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookApiService} from "../book-api.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {Observable, of} from "rxjs";
import {IBook} from "../book";

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnChanges{

  @Input() isbn: string = '';
  private readonly route = inject(ActivatedRoute);
  private readonly bookApiService = inject(BookApiService);
  bookOfGivenIsbn$: Observable<IBook | undefined> = of(undefined)

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isbn)
    if (this.isbn) {
      this.bookOfGivenIsbn$ = this.bookApiService.getBookByIsbn(this.isbn);
    }
  }


}
