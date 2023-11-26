import { Component } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day2_Assignment2';
  sendCategory: string = '';
  productList: Product[] = [
    {pId: 1, pName: 'Name1', pPrize: 100, pCategory: 'P1'},
    {pId: 2, pName: 'Name2', pPrize: 200, pCategory: 'P2'},
    {pId: 3, pName: 'Name3', pPrize: 150, pCategory: 'P1'},
    {pId: 4, pName: 'Name4', pPrize: 300, pCategory: 'P3'},
    {pId: 5, pName: 'Name5', pPrize: 250, pCategory: 'P1'},
    {pId: 6, pName: 'Name6', pPrize: 350, pCategory: 'P2'},
    {pId: 7, pName: 'Name7', pPrize: 120, pCategory: 'P3'},
    {pId: 8, pName: 'Name8', pPrize: 260, pCategory: 'P2'},
    {pId: 9, pName: 'Name9', pPrize: 500, pCategory: 'P2'},
    {pId: 10, pName: 'Name10', pPrize: 230, pCategory: 'P1'},
  ];
  sendToCategory(val: string){
this.sendCategory = val;
  }
}
