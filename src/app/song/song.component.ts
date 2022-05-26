import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../datas.service';
import { SongdetService } from '../songdet.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
  providers:[DatasService]
})
export class SongComponent implements OnInit {
  songs:any=[];
  datas:any=[];
  id:any='';
  constructor(private dataService:DatasService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getAllDetails().subscribe((allData)=>{
      console.log(allData);
      this.datas=allData;
      console.log(this.datas);
      this.id=this.route.snapshot.params['id'];
      console.log(this.id);
      this.songs = this.datas.filter((item:any) => item.id == this.id);

    // this.songs=this.song.getSongDetails();
    console.log(this.songs);
      
    })
    
    // console.log(this.datas)
    
  }

}
