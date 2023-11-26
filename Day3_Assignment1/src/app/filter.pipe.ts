import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/model/employe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Employee[], job: string): Employee[] {
    let output:Employee[] = [];
    
 
    if(job == ''){
      output = value
    }else
      output  = value.filter( item => item.job == job );

    return output;
  }

}
