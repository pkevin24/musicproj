import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongdetService {
  
  constructor() { }
  song:any=[];
  addSongDetails(data:any){
    this.song=data;
    console.log(this.song);
  }
  getSongDetails(){
    console.log(this.song)
    return this.song;
  }
}
