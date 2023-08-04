import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GadegetsRoutingModule } from './gadegets-routing.module';
import { GadegetsComponent } from './gadegets/gadegets.component';
import { HomeModule } from '../home/home.module';
import { DataService } from '../data.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GadegetsComponent
  ],
  imports: [
    CommonModule,
    GadegetsRoutingModule,
    HomeModule,
    SharedModule
  ],
  providers:[
    DataService
  ]
})
export class GadegetsModule { }
