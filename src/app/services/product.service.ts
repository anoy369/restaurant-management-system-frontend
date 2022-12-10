import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl

  constructor(private http:HttpClient) { }

  add(data:any){
    return this.http.post(this.url+'/product/add/',data,{
      headers: new HttpHeaders().set('content-Type',"application/json")
    })
  }

  update(data:any){
    return this.http.patch(this.url+'/product/update',data,{
      headers: new HttpHeaders().set('content-Type',"application/json")
    })
  }

  getProducts(){
    return this.http.get(this.url+'/product/get')
  }

  updateStatus(data:any){
    return this.http.patch(this.url+'/product/updateStatus',data,{
      headers: new HttpHeaders().set('content-Type',"application/json")
    })
  }

  delete(id:any){
    return this.http.delete(this.url+'/product/delete/'+id,{
      headers: new HttpHeaders().set('content-Type',"application/json")
    })
  }

  getByCategoryId(id:any){
    return this.http.get(this.url+'/product/geByCategory/'+id,{
      headers: new HttpHeaders().set('content-Type',"application/json")
    })
  }

  getById(id:any){
    return this.http.get(this.url+'/product/getById/'+id,{
      headers: new HttpHeaders().set('content-Type',"application/json")
    })
  }


}
