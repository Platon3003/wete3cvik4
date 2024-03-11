import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'library-fe';

}
