import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpcClient:HttpClient) { }

  getByAllUser():Observable<Usuarios[]> {
    return this.httpcClient.get<Usuarios[]>('https://fakestoreapi.com/users')
  }

  getById(usuarioId:number):Observable<Usuarios> {
    return this.httpcClient.get<Usuarios>('https://fakestoreapi.com/users/'+ usuarioId)
  }
}
