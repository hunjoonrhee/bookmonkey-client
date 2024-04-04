import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IBook} from "../book";

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  @Input({required: true}) content!: IBook;
  @Output() detailClick = new EventEmitter<IBook>();
  linkStyle = {
    backgroundColor: 'orange'
  }
  handleDetailClick(e: MouseEvent) {
    console.log(e);
    const inputElement = e.target as HTMLAnchorElement
    console.log(inputElement)
    this.detailClick.emit(this.content)
  }
}
