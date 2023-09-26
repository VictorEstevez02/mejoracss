import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LevelShopService } from '../level-shop.service';
import { Producto } from '../producto';
import { listaDeProducto } from '../listaDeProducto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.scss']
})
export class DetalleDeProductoComponent implements OnInit {

products$:Observable <Producto>;
  product:number;



  constructor (private route:ActivatedRoute , private levelShopService:LevelShopService) {
    this.product = parseInt(this.route.snapshot.params["id"])
    this.products$ = this.levelShopService.getById(this.product)
  }

  ngOnInit(): void {

  }

}
