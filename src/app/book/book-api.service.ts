import {inject, Injectable} from '@angular/core';
import {IBook} from "./book";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  private baseUrl = "http://localhost:4730/books"
  private readonly httpClient = inject(HttpClient)
  getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.baseUrl)
  }

  getBookByIsbn(isbn: string): Observable<IBook> {
    return this.httpClient.get<IBook>(this.baseUrl+`/${isbn}`);
  }
}
