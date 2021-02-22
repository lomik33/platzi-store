import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }
  @Output() addCartClick: EventEmitter<any>= new EventEmitter();

  today = new Date();
  ngOnInit() {
  }

  addCart=()=>{
    console.log("Add Cart");
    this.addCartClick.emit("emitir click de addcart" + this.product.title);
  }

}
