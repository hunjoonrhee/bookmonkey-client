import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  formBuilder = inject(FormBuilder);
  bookForm: FormGroup;

  constructor() {
    this.bookForm = this.formBuilder.group({
      title: new FormControl(''),
      author: new FormControl(''),
      isbn: new FormControl(''),
      abstract: new FormControl('')
    });
  }

  submit() {
    console.log(this.bookForm.value);
    console.log("submitted!")
  }

}
