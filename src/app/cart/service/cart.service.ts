import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  creatNewCart(model:any) :Observable<any>{
    return this._HttpClient.post(environment.baseApi + 'carts' , model);
  }
}
