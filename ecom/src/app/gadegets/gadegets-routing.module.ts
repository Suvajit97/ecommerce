import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GadegetsComponent } from './gadegets/gadegets.component';

const routes: Routes = [
  {
    path:'',
    component:GadegetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GadegetsRoutingModule { }
