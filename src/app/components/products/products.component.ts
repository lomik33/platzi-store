import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/product/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products:Product[];
  constructor(private productService: ProductsService ) {
    this.products=productService.getAllProducts();
  }

  ngOnInit() {
  }


  addCartDelegate = (e) =>{
    console.log('delegate '+e);
  }
}
