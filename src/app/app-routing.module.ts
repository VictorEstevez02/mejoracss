import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelShopComponent } from './level-shop/level-shop.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormLevelShopComponent } from './form-level-shop/form-level-shop.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UsuariosDellateComponent } from './usuarios-dellate/usuarios-dellate.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{path:'',component:LoginUserComponent},
{path:'categorias',component:HomeComponent,
children:[
{path:'',redirectTo:'level',pathMatch:'full'},
{path:'level',component:LevelShopComponent},
{path:'usuarios',component:UsuariosComponent},
{path:'agregarCliente',component:FormLevelShopComponent},
{path:'detalleDeProducto/:id',component:DetalleDeProductoComponent},
{path:'editarProducto/:id',component:EditarProductoComponent},
{path:'userDetail/:id',component:UsuariosDellateComponent},
{path:'logOut',component:LogoutComponent},
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
