import { Component, OnInit } from '@angular/core';
import { SongdetService } from '../songdet.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songs:any=[];
  
  constructor(private song:SongdetService) { }

  ngOnInit(): void {
    this.songs=this.song.getSongDetails();
    console.log(this.songs);
  }

}
