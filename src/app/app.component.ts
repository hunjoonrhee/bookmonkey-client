import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BookCardComponent} from "./book/book-card/book-card.component";
import {IBook} from "./book/book";
import {BookFilterPipe} from "./book/book-filter/book-filter.pipe";
import {BookComponent} from "./book/book/book.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BookComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
