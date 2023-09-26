import { Component,Input, Output,EventEmitter} from '@angular/core';
import { LevelShopService } from '../level-shop.service';
import { Producto } from '../producto';
import { listaDeProducto } from '../listaDeProducto';
import { filter } from 'rxjs';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() lista:Producto[] =[]
  @Output() filterProducts:EventEmitter<Producto[]> = new EventEmitter<Producto[]>

  constructor ( private LevelShopService:LevelShopService) {

   }

  FilterProduct(product:string){
    this.LevelShopService.getAllProduct().subscribe((data:Producto[])=>{
      const products = data.filter(p=>p.category === product)
      this.filterProducts.emit(products)
    })

  }

  mostrarTodo() {
   this.filterProducts.emit(this.lista)
  }

  }





