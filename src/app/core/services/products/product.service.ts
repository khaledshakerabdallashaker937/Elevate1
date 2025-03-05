import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from '../../../shared/environement';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private readonly _HttpClient = inject(HttpClient)

  constructor() { }

getAllProducts():Observable<any>{
  return this._HttpClient.get(`${environement.baseUrl}/products`)
}

getSpecificproducts(id:string):Observable<any>{

  return this._HttpClient.get(`${environement.baseUrl}/products/${id}`)
}

}
