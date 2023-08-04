import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomescreenComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatDialogModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
