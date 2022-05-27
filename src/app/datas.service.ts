import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DatasService {
  datas=[
]
  url='http://localhost:8080/details';
  constructor(private http:HttpClient) { }
  getAllDetails(){
    return this.http.get(this.url);
  }
  saveStudentData(data:any){
    console.log(data);
    return  this.http.post(this.url,data,httpOptions);
    console.log(this.datas);
  }
deleteSong(id:any){
  // return this.http.delete(`${this.url}/${id}`);
  return this.http.delete('http://localhost:8080/details/'+id);
}


}