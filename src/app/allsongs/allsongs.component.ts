import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-allsongs',
  templateUrl: './allsongs.component.html',
  styleUrls: ['./allsongs.component.css'],
  providers:[DatasService]
})
export class AllsongsComponent implements OnInit {
  datas:{id:number,Songname:string,Artist:string,dur:string,genre:string}[]=[];
  // datas:any;
  constructor(private dataService:DatasService) { }
  id1:number=0;
  Songname1:string="";
  Artist1:string="";
  dur1:string="";
  genre1:string="";

  ngOnInit(): void {
    this.datas=this.dataService.datas;
    // this.datas=[];

  }
  stylecolor:any;
  addList(){
       this.id1++;
       this.datas.push({
         id:this.id1,
        Songname:this.Songname1,
        Artist:this.Artist1,
        dur:this.dur1,
        genre:this.genre1
       }) 
       console.log(this.datas);
  }
  count=0;
  addFav(id:number){
    console.log(id);
    this.count++;
    if(this.count%2==0){
      this.stylecolor='xyz';
    }
    else{
      this.stylecolor='abc';
      alert('Added to favourites');
    }
  }

}
