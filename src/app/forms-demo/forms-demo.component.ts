import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { BookDTO } from '../model/model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.css'
})
export class FormsDemoComponent {

  constructor(private formBuilder: FormBuilder) {}
  @Output() newKnihaEventEmmiter = new EventEmitter<BookDTO>();

  // samostatna hodnota
  hodnota = new FormControl('');

  // formular (skupina hodnot)
  /*formular = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    publisher: new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
    }),
  });*/

  formular = this.formBuilder.group({
    name: ['', Validators.required],
    author: [''],
    publisher: this.formBuilder.group({
      name: [''],
      address: [''],
    }),
  });

  onSubmit() {
    
    console.warn(this.formular.value);
    if(this.formular.value.name !=null && this.formular.value.author != null){
      let book: BookDTO = new BookDTO(null, this.formular.value.name, this.formular.value.author);
      this.newKnihaEventEmmiter.emit(book);
    }
    
  }

  zmenForm(): void {
    this.formular.patchValue({
      name: 'Java 2',
      publisher: {
        name: 'ACM',
      },
    });
  }

}
