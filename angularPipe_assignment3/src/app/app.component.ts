import { Component } from '@angular/core';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public prev:number = 0;
  public next:number = 4;
  public  empsArray:Employee[]  =  [
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Aman", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } ,
    {  empno : 10256, ename:"Jovi", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Joy", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Andy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Ram", job: "Tester", deptno : 40  } ,
    {  empno : 10256, ename:"Teja", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"karan", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Candy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Samy", job: "Tester", deptno : 40  } 
  ];
   total = this.empsArray.length;

  clickMe(val: string){
   if(val == 'prev'){
    if(this.prev > 0){
      this.prev = this.prev - 4;
      this.next = this.next - 4;
    }
  }else if(val == 'next'){
      if(this.next < this.total){
        this.prev = this.prev + 4;
        this.next = this.next + 4;
      }
    }
    

   
  }
}
