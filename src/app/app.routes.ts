import { Routes } from "@angular/router";

import { LoginComponent } from './core/login/login.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent }
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
]