import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['ismael', 'paula', 'andres'];
  power: number;

  addItem(){
    this.items.push('nuevo item' + this.items.length);
  }

  deleteItem (index: number){
    this.items.splice(index, 1);
  }
}
