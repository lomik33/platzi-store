import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing-module';
import { SharedModule } from './../shared/shared.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent,],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule

  ]
})
export class ProductsModule { }
