import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    LoginComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BodyComponent,
    HeaderComponent
    
  ]
})
export class SharedModule { }
