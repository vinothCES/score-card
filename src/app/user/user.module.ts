import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from './../core/core.module';

import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RatingComponent } from './rating/rating.component';
import { HomeComponent } from './home/home.component';
import { USER_ROUTES } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [NavbarComponent, DashboardComponent, RatingComponent, HomeComponent]
})
export class UserModule { }
