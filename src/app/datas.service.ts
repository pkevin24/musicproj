import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DatasService {
  datas=[
]
  url='http://localhost:8000/details';
  constructor(private http:HttpClient) { }
  getAllDetails(){
    return this.http.get(this.url);
  }
  saveStudentData(data:any){
    console.log(data);
    return  this.http.post(this.url,data);
    console.log(this.datas);
  }
deleteSong(id:any){
  return this.http.delete(`${this.url}/${id}`);
}


}
