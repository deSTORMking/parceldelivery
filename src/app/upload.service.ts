import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
  _url='';
  constructor(private http:HttpClient) { }

  upload(user:User){
   return this.http.post<any>(this._url,user);
  }
}
