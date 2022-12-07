import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl

  constructor(private http: HttpClient) { }

  signup(data: any){
    return this.http.post(this.url+"/user/signup", data, {
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  forgotPassword(data: any){
    return this.http.post(this.url+"/user/forgotPassword", data, {
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  login(data: any){
    return this.http.post(this.url+"/user/login", data, {
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  checkToken(){
    return this.http.get(this.url+"/user/checkToken")
  }

  changePassword(data:any){
    return this.http.post(this.url+"/user/changePassword", data, {
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }
}
