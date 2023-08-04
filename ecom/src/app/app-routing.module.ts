import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) ,
 },
  {
     path: 'Cloths', loadChildren: () => import('./cloths/cloths.module').then(m => m.ClothsModule) ,
  },
  {
    path: 'Jwellery', loadChildren: () => import('./jewelery/jewelery.module').then(m => m.JeweleryModule) ,
 },
 {
  path: 'Gadegets', loadChildren: () => import('./gadegets/gadegets.module').then(m => m.GadegetsModule) ,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
