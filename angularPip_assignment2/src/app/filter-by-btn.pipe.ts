import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/model/employee';

@Pipe({
  name: 'filterByBtn'
})
export class FilterByBtnPipe implements PipeTransform {

  transform(input: Employee[], dno:number) : Employee[] {
    let output:Employee[] = [];
    
 
    if(dno == -1)
      output = input;
    else
      output  = input.filter( item => item.deptno == dno );

    return output;
  }

}
