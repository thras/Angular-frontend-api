import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductsAPIList } from './products.interfaces';
import { delay } from 'rxjs';

const PRODUCTS_API = 'https://codingfactory.ddns.net/api/product'

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<ProductsAPIList>(`${PRODUCTS_API}/findall`).pipe(delay(1000));
  }

  insertProduct(product: Product) {
    return this.http.post<ProductsAPIList>(`${PRODUCTS_API}/create`, product);
  }

}
