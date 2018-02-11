import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [LoginComponent],
  exports: [
    NgbModule
  ]
})
export class CoreModule { }
