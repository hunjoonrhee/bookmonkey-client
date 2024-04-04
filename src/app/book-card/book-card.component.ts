import {Component, Input} from '@angular/core';
import {IBook} from "../book";

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  linkStyle = {
    backgroundColor: 'orange'
  }
  @Input({required: true}) content!: IBook;
}
