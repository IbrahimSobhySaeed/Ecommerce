import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( public _HttpClient:HttpClient) { }
  getAllProduct():Observable<any>{
    return this._HttpClient.get(environment.baseApi+'products');

  }

  getAllCategory():Observable<any>{
    return this._HttpClient.get(environment.baseApi+'products/categories');

  }

  getProductsByCategory(keyword:any):Observable<any>{
    return this._HttpClient.get(environment.baseApi+`products/category/${keyword}`);

  }
  getProductsByID(id:any):Observable<any>{
    return this._HttpClient.get(environment.baseApi+"products/"+id);

  }


}
