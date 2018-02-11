import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RatingComponent } from './rating/rating.component';

export const USER_ROUTES: Routes = [
  { path: 'user', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'rating', component: RatingComponent },
      { path: '', redirectTo: './dashboard', pathMatch: 'full' }
    ]
  }
]