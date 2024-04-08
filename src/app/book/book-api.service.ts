import { Injectable } from '@angular/core';
import {IBook} from "./book";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  private baseUrl = "http://localhost:4730/books"
  private books: IBook[] = [];
  constructor(private readonly httpClient: HttpClient) {}
  getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.baseUrl)
  }
}
