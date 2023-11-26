import { Component } from '@angular/core';
import { Employee } from 'src/model/employe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayMode: string = 'Card';
  filterJob:string = '';
  public  empsArray:Employee[]  =  [
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Aman", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } ,
    {  empno : 10266, ename:"Jovi", job: "Manager", deptno : 10  },
    {  empno : 10267, ename:"Joy", job: "Lead", deptno : 20  },
    {  empno : 10268, ename:"Andy", job: "Programmer", deptno : 30  },
    {  empno : 10269, ename:"Ram", job: "Tester", deptno : 40  } ,
    {  empno : 10276, ename:"Teja", job: "Manager", deptno : 10  },
    {  empno : 10277, ename:"karan", job: "Lead", deptno : 20  },
    {  empno : 10278, ename:"Candy", job: "Programmer", deptno : 30  },
    {  empno : 10279, ename:"Samy", job: "Tester", deptno : 40  } 
  ];
}
