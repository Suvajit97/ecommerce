import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-gadegets',
  templateUrl: './gadegets.component.html',
  styleUrls: ['./gadegets.component.css']
})
export class GadegetsComponent {
  getdata:any;
  constructor(public fashionservice:DataService){}
  ngOnInit(): void {
    this.getgadegets();
  }
  getgadegets(){
    this.fashionservice.GetGadegets().subscribe((res)=>{
      console.log('val',res);
      this.getdata = res;
    });
    
  }
}
