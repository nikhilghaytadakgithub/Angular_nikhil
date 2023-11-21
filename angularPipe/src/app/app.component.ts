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
 
  public  empsArray:Employee[]  =  [
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10, grade: 1  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20, grade: 2  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30, grade: 3  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40, grade: 4  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10, grade: 1  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20, grade: 2  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30, grade: 3  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40, grade: 4  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10, grade: 1  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20, grade: 2  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30, grade: 3  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40, grade: 4  } 
  ];	
}
