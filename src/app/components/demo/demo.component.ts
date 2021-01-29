import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


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
