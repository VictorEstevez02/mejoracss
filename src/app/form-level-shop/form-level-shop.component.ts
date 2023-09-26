import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { listaDeProducto } from '../listaDeProducto';
import { LevelShopService } from '../level-shop.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-form-level-shop',
  templateUrl: './form-level-shop.component.html',
  styleUrls: ['./form-level-shop.component.scss']
})
export class FormLevelShopComponent {

  form : FormGroup;

  constructor(private formulario:FormBuilder, private roter:Router, private service:LevelShopService) {
    this.form = this.formulario.group({
      id:[0,Validators.required],
      category:["",Validators.required],
      title:["",Validators.required],
      marca:"",
      price:[0,Validators.required]

    })
  }

  onSumbmit(productData:any) {
    this.service.addProduct(this.form.value).subscribe((data:Producto)=>{
      console.log(data)
    })
    this.form.reset()
    this.roter.navigate(["/level"])

  }

}
