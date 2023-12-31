import { Component, Input } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() prod: Product = new Product();
  @Input() selectedCategory: string = '';


}
