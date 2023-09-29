import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LevelShopComponent } from './level-shop/level-shop.component';
import { FilterComponent } from './filter/filter.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { FormLevelShopComponent } from './form-level-shop/form-level-shop.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosFilterComponent } from './usuarios-filter/usuarios-filter.component';
import { UsuariosDellateComponent } from './usuarios-dellate/usuarios-dellate.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LevelShopComponent,
    FilterComponent,
    DetalleDeProductoComponent,
    FormLevelShopComponent,
    EditarProductoComponent,
    UsuariosComponent,
    UsuariosFilterComponent,
    UsuariosDellateComponent,
    LoginUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
