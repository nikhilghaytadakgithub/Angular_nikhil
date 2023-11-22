import { Component } from '@angular/core';
import { Employee } from 'src/model/employe';
import { EmpGadgetPipe } from './emp-gadget.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPipe';

  public empsArray: Employee[] = [
    { empno: 10256, ename: "Scott", grade: 1 },
    { empno: 10257, ename: "Smith", grade: 3 },
    { empno: 10258, ename: "Sandy", grade: 3 },
    { empno: 10259, ename: "Sam", grade: 4 },
    { empno: 10256, ename: "Haris", grade: 1 },
    { empno: 10257, ename: "Joy", grade: 4 },
    { empno: 10258, ename: "Candy", grade: 3 },
    { empno: 10259, ename: "Sameer", grade: 2 },
  ];
}
