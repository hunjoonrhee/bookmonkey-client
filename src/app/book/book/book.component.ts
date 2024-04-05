import { Component } from '@angular/core';
import {IBook} from "../book";
import {CommonModule} from "@angular/common";
import {BookCardComponent} from "../book-card/book-card.component";
import {BookFilterPipe} from "../book-filter/book-filter.pipe";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books: IBook[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: "How to Win Friends and Influence ..."
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...'
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ..."
    }
  ];
  bookSearchTerm?: string;

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
