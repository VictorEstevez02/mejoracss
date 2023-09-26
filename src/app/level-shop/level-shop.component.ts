import { Component } from '@angular/core';
import { Producto } from '../producto';
import { LevelShopService } from '../level-shop.service';
import { listaDeProducto } from '../listaDeProducto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-level-shop',
  templateUrl: './level-shop.component.html',
  styleUrls: ['./level-shop.component.scss']
})
export class LevelShopComponent {
  title = 'LEVEL SHOP';

  productos$:Observable<Producto[]>

  constructor (private service:LevelShopService) {
    this.productos$ = this.service.getAllProduct()
  }


  operacionProducto(producto:Producto[]) {
     this.productos$.subscribe((data:Producto[])=>{
      producto = data
     })

  }
}
