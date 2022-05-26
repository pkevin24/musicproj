import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
  providers:[DatasService]
})
export class GenreComponent implements OnInit {
  genres:any=[{names:'Rock'},{names:'Classic'},{names:'Hiphop'}];
  addGenre=new FormGroup({
    category:new FormControl('')
  })
  genre:any=[];
  constructor(private fb:FormBuilder,private dataService:DatasService) { }
  datas:any=[];
  list:any=[];
  ngOnInit(): void {
    this.sendGenre();
    
}
  SaveData(){
    console.log(this.addGenre)
    console.log(this.addGenre.value);
    this.genre=this.addGenre.value;
    console.log(this.genre.category);
    this.dataService.getAllDetails().subscribe((allData)=>{
      console.log(allData);
      this.datas=allData;
      this.list = this.datas.filter((item:any) => item.genre==this.genre.category);
      console.log(this.list);
      console.log(this.datas)
  })
  }
  sendGenre(){
    console.log(this.genre);
  }

}
