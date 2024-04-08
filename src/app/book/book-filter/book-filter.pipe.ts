import { Pipe, PipeTransform } from '@angular/core';
import {IBook} from "../book";

@Pipe({
  name: 'bookFilter',
  standalone: true
})
export class BookFilterPipe implements PipeTransform {

  transform(books: IBook[] | null, searchTerm?: string): IBook[] {

    if (!books) {
      return []
    }
    if (searchTerm) {
      return books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      return []
    }

  }

}
