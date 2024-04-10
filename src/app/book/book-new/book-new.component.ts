import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  bookForm = inject(FormBuilder).group({
    author: ['', [Validators.required]],
    title: ['', [Validators.required]],
    isbn: ['', [Validators.required, Validators.minLength(13)], []],
    abstract: ['', []],
    }
  )

  constructor() {
    this.bookForm.controls.title.valueChanges.subscribe({
      next: value => console.log(value)
    })
  }



  submit() {
    console.log(this.bookForm.value);
    console.log("submitted!")
  }

}
