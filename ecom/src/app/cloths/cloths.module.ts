import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothsRoutingModule } from './cloths-routing.module';
import { ClothsComponent } from './cloths/cloths.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { DataService } from '../data.service';


@NgModule({
  declarations: [
    ClothsComponent
  ],
  imports: [
    CommonModule,
    ClothsRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers:[
    DataService
  ]
})
export class ClothsModule { }
