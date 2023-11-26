import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
@Output() sendClick: EventEmitter<string> = new EventEmitter();
productVal:string = '';
click_in(): void{
  this.sendClick.emit(this.productVal);
}
}
