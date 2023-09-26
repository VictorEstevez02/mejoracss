import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../usuarios';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-dellate',
  templateUrl: './usuarios-dellate.component.html',
  styleUrls: ['./usuarios-dellate.component.scss']
})
export class UsuariosDellateComponent {

  users$:Observable<Usuarios>;
  userId:number;

  constructor(private router:ActivatedRoute, private userService:UsuariosService){
    this.userId = parseInt(this.router.snapshot.params["id"])
    userService.getById(this.userId).subscribe((data:Usuarios)=>{
      console.log(data)
    })
    this.users$ = this.userService.getById(this.userId)
  }

}
