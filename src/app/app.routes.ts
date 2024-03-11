import { Routes } from '@angular/router';
import {BindingDemoComponent} from "./binding-demo/binding-demo.component";
import { PageDemoComponent } from './page-demo/page-demo.component';
export const routes: Routes = [
  { path: 'binding-demo', component: BindingDemoComponent },
  { path: 'page-demo', component: PageDemoComponent }
]
