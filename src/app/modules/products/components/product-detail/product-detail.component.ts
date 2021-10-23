import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/product/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  product: Product;

  ngOnInit() {
    /*Escuchar cambios que sucedan*/
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productService.getProduct(id);

    });
  }

}
