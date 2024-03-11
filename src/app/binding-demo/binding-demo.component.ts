import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-binding-demo',
  standalone: true,
    imports: [
        FormsModule,
        RouterOutlet
    ],
  templateUrl: './binding-demo.component.html',
  styleUrl: './binding-demo.component.css'
})
export class BindingDemoComponent {

  pocitadlo: number = 0;
  zakaz: boolean = false;

  hodnota1: string = '';
  hodnota2: string = '';

  pocitaj(): void {
    this.pocitadlo++;
  }

  zakazPovol(): void {
    this.zakaz = !this.zakaz;
  }

  get1(): void {
    console.log(this.hodnota1);
  }

  set1(): void {
    this.hodnota1 = 'AAA';
  }

  get2(): void {
    console.log(this.hodnota2);
  }

  set2(): void {
    this.hodnota2 = 'AAA';
  }

}
