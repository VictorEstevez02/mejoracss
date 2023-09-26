import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelShopComponent } from './level-shop/level-shop.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { FormLevelShopComponent } from './form-level-shop/form-level-shop.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosDellateComponent } from './usuarios-dellate/usuarios-dellate.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",component:LoginUserComponent},
  {path:"categorias",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"usuarios",component:UsuariosComponent,canActivate:[AuthGuard]},
  {path:"level",component:LevelShopComponent},
  {path:"agregarCliente",component:FormLevelShopComponent},
  {path:"userDetail/:id",component:UsuariosDellateComponent},
  {path:"detalleDeProducto/:id",component:DetalleDeProductoComponent},
  {path:"editarProducto/:id",component:EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
