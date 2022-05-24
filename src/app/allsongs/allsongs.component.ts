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
  constructor(private dataService:DatasService) { }

  ngOnInit(): void {
    this.datas=this.dataService.datas;
  }

}
