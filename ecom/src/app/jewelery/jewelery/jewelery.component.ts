import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent {
  getdata:any;
  constructor(public fashionservice:DataService){}
  ngOnInit(): void {
    this.getjewelery();
  }
  getjewelery(){
    this.fashionservice.GetJewelers().subscribe((res)=>{
      console.log('val',res);
      this.getdata = res;
    });
    
  }
}
