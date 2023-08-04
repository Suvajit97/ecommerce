import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { TestComponent } from '../test/test.component';
@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  modalDialog: MatDialogRef<TestComponent> | undefined;
  constructor(public matDialog: MatDialog){}
  ngOnInit(): void {
    
  }
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
