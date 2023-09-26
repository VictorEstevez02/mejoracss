import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-usuarios-filter',
  templateUrl: './usuarios-filter.component.html',
  styleUrls: ['./usuarios-filter.component.scss']
})
export class UsuariosFilterComponent {

  @Input() lista:Usuarios[] = []
  @Output() users:EventEmitter<Usuarios[]> = new EventEmitter<Usuarios[]>

  constructor(private usuarioService:UsuariosService) {}

  filterUser(user:string) {
    const buscarUser = user.toLowerCase()
    this.usuarioService.getByAllUser().subscribe((data:Usuarios[])=>{
      const usuario = data.filter(u=>u.username === buscarUser)
      this.users.emit(usuario)
    })
  }

  buscarTodo() {
    this.users.emit(this.lista)
  }

}
