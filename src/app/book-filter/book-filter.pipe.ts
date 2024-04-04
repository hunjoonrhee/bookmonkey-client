import { Pipe, PipeTransform } from '@angular/core';
import {IBook} from "../book";

@Pipe({
  name: 'bookFilter',
  standalone: true
})
export class BookFilterPipe implements PipeTransform {

  transform(books: IBook[], searchTerm?: string): IBook[] {

    if (searchTerm) {
      return books.filter((book) => book.title.includes(searchTerm));
    } else {
      return []
    }

  }

}
