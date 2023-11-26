import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/model/employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Employee[], prop: string , val: any): Employee[] {
    console.log(value, prop, val);
    return value.filter(item =>{
      if(item['deptno'] == parseInt(val) || item['empno'] == parseInt(val) || item['ename'] == val || item['job'] == val) 
      {}
    });
  }

}
