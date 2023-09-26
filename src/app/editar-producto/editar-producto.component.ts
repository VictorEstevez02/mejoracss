import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelShopService } from '../level-shop.service';
import { listaDeProducto } from '../listaDeProducto';
import { Producto } from '../producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent {

  form : FormGroup;
  productoId:number;


  constructor(private formulario:FormBuilder, private roter:Router, private activeRoute:ActivatedRoute, private levelShopService:LevelShopService) {
    this.form = this.formulario.group({
      id:[0,Validators.required],
      category:["",Validators.required],
      title:["",Validators.required],
      marca:"",
      price:[0,Validators.required]

    })

    this.productoId = parseInt(this.activeRoute.snapshot.params["id"])
    levelShopService.getById(this.productoId).subscribe((product)=>{
      this.form.patchValue(product)
    })

  }


  onSumbmit(productData:any) {
    this.levelShopService.updateProduct(this.form.value).subscribe((data:Producto)=>{
      console.log(data)
    })
    this.form.reset()
    this.roter.navigate(["/level"])

}
}
