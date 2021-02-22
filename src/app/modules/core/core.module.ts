import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/product/products.service';


//Buena práctica se cree y este se utilice en todos los componentes del proyecto
//Cuando se importa entonces ahi sóilo una vez se llama
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ProductsService
  ]
})
export class CoreModule { }
