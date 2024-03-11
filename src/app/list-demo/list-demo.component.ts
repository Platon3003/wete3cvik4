import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BookDTO} from "../model/model";

@Component({
  selector: 'app-list-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-demo.component.html',
  styleUrl: './list-demo.component.css'
})
export class ListDemoComponent {

  zoznam: BookDTO[] = []

}
