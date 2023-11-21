import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/model/employe';

@Pipe({
  name: 'empGadget'
})
export class EmpGadgetPipe implements PipeTransform {

  transform(input: number): string {
   let result:string = '';
   if(input == 2 || input == 3){
      result = 'A';
   }else if(input == 1){
    result = 'A+';
   }else if(input > 3){
    result = 'B';
   }
   return result;
  }

}
