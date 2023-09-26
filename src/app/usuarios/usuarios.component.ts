import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Observable } from 'rxjs';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  title:string = "USUARIOS"

  users$:Observable<Usuarios[]>;

  constructor(private usuarios:UsuariosService) {
    this.users$ = this.usuarios.getByAllUser()
  }

  filter(user:Usuarios[]) {
    this.users$.subscribe((data:Usuarios[])=>{
      user = data
    })
  }

}
