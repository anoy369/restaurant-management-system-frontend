import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl

  constructor(private http:HttpClient) { }

  add(data:any){
    return this.http.post(this.url+'/category/add',data,{
      headers: new HttpHeaders().set('content-Type',"application/json")
    })
  }

  update(data:any){
    return this.http.patch(this.url+'/category/update',data,{
      headers: new HttpHeaders().set('content-Type',"application/json")
    })
  }

  getCategory(){
    return this.http.get(this.url+'/category/get')
  }
}
