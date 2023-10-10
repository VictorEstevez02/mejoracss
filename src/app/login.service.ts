import { Injectable } from '@angular/core';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  loginUser:boolean = false
  logout:boolean = false

  constructor() { }

 getLogin =(login:boolean) => {
  this.loginUser = login
 }

 getIsLogin = () => {
  return this.loginUser
 }

 getLogOut ()  {
  this.logout = false
 }

 getIsLogOut () : boolean {
  return this.logout
 }

}
