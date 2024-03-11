import { Component } from '@angular/core';
import { FormsDemoComponent } from '../forms-demo/forms-demo.component';
import { ListDemoComponent } from '../list-demo/list-demo.component';

@Component({
  selector: 'app-page-demo',
  standalone: true,
  imports: [FormsDemoComponent, ListDemoComponent],
  templateUrl: './page-demo.component.html',
  styleUrl: './page-demo.component.css'
})
export class PageDemoComponent {

}
