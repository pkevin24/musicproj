import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import {FormGroup,FormControl} from '@angular/forms'
import { SongdetService } from '../songdet.service';
@Component({
  selector: 'app-allsongs',
  templateUrl: './allsongs.component.html',
  styleUrls: ['./allsongs.component.css'],
  providers:[DatasService,SongdetService]
})
export class AllsongsComponent implements OnInit {
  constructor(private dataService:DatasService,private song:SongdetService) { }

  addSong=new FormGroup({
    songname:new FormControl(''),
    artist:new FormControl(''),
    dur:new FormControl(''),
    genre:new FormControl(''),
    fav:new FormControl(false)
  })
  datas:any=[];
  ngOnInit(): void {
    
    
    this.dataService.getAllDetails().subscribe((allData)=>{
      console.log(allData);
      this.datas=allData;
      console.log(this.datas)
      
    })

  }
  
  stylecolor:any;
  SaveData(){
    this.dataService.saveStudentData(this.addSong.value).subscribe((results)=>{
      console.log(results);
      this.addSong.reset();
      this.ngOnInit();
    });
  }
  checkfav(data:any){
    if(data.fav)
      return true;
    else
      return false;
  }
  count=0;
  addFav(d:any){
    console.log(d);
    // this.count++;
    if(d.fav==true)
    {
      d.fav=false;
    }
    else
    {
      d.fav=true;
    }
    // if(this.count%2==0){
    //   this.stylecolor='xyz';
    // }
    // else{
    //   this.stylecolor='abc';
    //   alert('Added to favourites');
    // }
  }

  deleteSong(songId:any){
    // console.log(songId);
    this.dataService.deleteSong(songId).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    });
  }
  list:any=[];
  songdetail(data:any){
    console.log(data);
    this.list = this.datas.filter((item:any) => item.id == data)
    console.log(this.list);
    this.song.addSongDetails(this.list);
  }
  

}
