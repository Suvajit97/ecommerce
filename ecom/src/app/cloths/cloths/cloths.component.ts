import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent implements OnInit {
  getdata:any;
  constructor(public fashionservice:DataService){}
  ngOnInit(): void {
    this.getfashion();
  }
  getfashion(){
    this.fashionservice.Getfashion().subscribe((res)=>{
      console.log('val',res);
      this.getdata = res;
    });
    
  }

}
