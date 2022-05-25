import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
  providers:[DatasService]
})
export class FavComponent implements OnInit {

  constructor(private dataService:DatasService) { }
  datas:any=[];
  list:any=[];
  ngOnInit(): void {
    this.dataService.getAllDetails().subscribe((allData)=>{
      console.log(allData);
      this.datas=allData;
      this.list = this.datas.filter((item:any) => item.fav == true);
      console.log(this.list);
      console.log(this.datas)
      
    })
    
  }

}
