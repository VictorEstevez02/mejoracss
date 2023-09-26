import { Injectable } from '@angular/core';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  loginUser:boolean = false

  constructor() { }

 getLogin =(login:boolean) => {
  this.loginUser = login
 }

 getIsLogin = () => {
  return this.loginUser
 }

}
