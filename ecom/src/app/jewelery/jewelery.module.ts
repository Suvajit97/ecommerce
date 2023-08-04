import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JeweleryRoutingModule } from './jewelery-routing.module';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { DataService } from '../data.service';


@NgModule({
  declarations: [
    JeweleryComponent
  ],
  imports: [
    CommonModule,
    JeweleryRoutingModule,
    HomeModule,
    SharedModule
  ],
  providers:[
    DataService
  ]
})
export class JeweleryModule { }
