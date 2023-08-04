import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  openmodal(){
    const modaldiv = document.getElementById('myModal');
    if(modaldiv!=null){
      modaldiv.style.display = 'block';
    }
  }
  closemodal(){
    const modaldiv = document.getElementById('myModal');
    if(modaldiv!=null){
      modaldiv.style.display = 'none';
    }
  }
}
