import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface tbl_User
{
  Id:number;
  Name:string;
  Age:number;
  Mark:number;
}
const endpoint='http://localhost:52696/api/API/';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(private http:HttpClient) { }

  addWebApiTab(student:any):Observable<any>
  {
   return this.http.post(endpoint+'postwebapitab',student); 
  }
 //method for get all values
  getAllWebApiTabs():Observable<any>{
    return this.http.get<tbl_User>(endpoint+'getwebapitabs')
  }
  //method to delete 
  deleteWebApi(id:number):Observable<any>{
    return this.http.delete<tbl_User>(endpoint+'deletewebapitab'+id);
  }
}
