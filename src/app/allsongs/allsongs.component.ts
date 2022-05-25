import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-allsongs',
  templateUrl: './allsongs.component.html',
  styleUrls: ['./allsongs.component.css'],
  providers:[DatasService]
})
export class AllsongsComponent implements OnInit {
  constructor(private dataService:DatasService) { }

  addSong=new FormGroup({
    Songname:new FormControl(''),
    Artist:new FormControl(''),
    dur:new FormControl(''),
    genre:new FormControl('')
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
      this.ngOnInit();
    });
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
  delete(idToRemove:any){
    this.datas= this.datas.filter((item: { id: any; }) => item.id !== idToRemove);
    // this.todos.splice(this.todos.findIndex((a: { id: any; }) => a.id === idToRemove.id) , 1)
  }
  deleteSong(songId:any){
    // console.log(songId);
    this.dataService.deleteSong(songId).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    });
  }
  

}
