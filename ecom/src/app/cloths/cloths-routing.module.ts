import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothsComponent } from './cloths/cloths.component';

const routes: Routes = [
  {
    path:'',
    component:ClothsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothsRoutingModule { }
