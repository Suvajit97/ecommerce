import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient: HttpClient) { }

  Getfashion() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
  GetJewelers() {
    return this.httpClient.get('https://fakestoreapi.com/products/category/jewelery');
  }
  GetGadegets() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
