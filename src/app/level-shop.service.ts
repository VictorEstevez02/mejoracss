import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { listaDeProducto } from './listaDeProducto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LevelShopService {

  constructor(private httpClient:HttpClient) { }

  getAllProduct() :Observable<Producto[]> {
    return this.httpClient.get<Producto[]>('https://fakestoreapi.com/products')

  }

  getById(productId:number):Observable<Producto> {
    return this.httpClient.get<Producto>('https://fakestoreapi.com/products/' + productId)


  }

  addProduct(product:Producto):Observable<Producto> {
    return this.httpClient.post<Producto>('https://fakestoreapi.com/products', product)
  }

  updateProduct(product:Producto):Observable<Producto> {
    return this.httpClient.put<Producto>('https://fakestoreapi.com/products/' + product.id , product)
  }





}




