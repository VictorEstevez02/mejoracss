import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router, } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Usuarios } from '../usuarios';
import { LoginService } from '../login.service';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements MatButtonModule {

  form:FormGroup;
  error:string = ""

  constructor(private formulario:FormBuilder, private route:Router, private service:UsuariosService,private loginService:LoginService){
    this.form = this.formulario.group({
      user:["",Validators.required],
      password:["",Validators.required],

    })
  }


  login() {
    this.service.getByAllUser().subscribe((data:Usuarios[])=>{
      const user = this.form.get("user")?.value
      const password = this.form.get("password")?.value
      const loginUser = data.find(u=>u.username === user && u.password === password)

      if (loginUser){
        this.loginService.loginUser = true
        this.route.navigate(["/categorias"])
        }
        else { this.error = "user o password invalido"}
      })

    }




}
