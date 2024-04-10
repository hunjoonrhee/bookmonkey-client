import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, NonNullableFormBuilder} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";
import {IBook} from "../book";
import {BookApiService} from "../book-api.service";
import {take} from "rxjs";
import {validAuthorName} from "../validators/author.validator";

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})

export class BookNewComponent {
  bookForm = inject(NonNullableFormBuilder).group({
        title: ['', [Validators.required], []],
        author: ['', [validAuthorName()]],
        abstract: ['', []],
        subtitle: ['', []],
        isbn: [
          '',
          [Validators.required, Validators.minLength(13), Validators.maxLength(13)],
          [],
        ],
        numPages: [0, []],
        publisher: ['', []],
        price: ['', []],
        cover: ['', []],
      }
  )
  private bookApiService = inject(BookApiService)

  constructor() {
    this.bookForm.controls.title.valueChanges.subscribe({
      next: value => console.log(value)
    })
  }



  submit() {
    this.bookApiService.createABook(this.bookForm.getRawValue() as IBook).subscribe()
    console.log(this.bookForm.value);
    console.log("submitted!")
  }

  protected readonly validAuthorName = validAuthorName;
}
