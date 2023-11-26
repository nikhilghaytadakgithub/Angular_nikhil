import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() prod: Product = new Product();
@Output() showCategory: EventEmitter<number> = new EventEmitter();

click_child_pCategory(val: number){
  this.showCategory.emit(val);
}
}
