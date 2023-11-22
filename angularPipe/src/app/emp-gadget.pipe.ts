import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/model/employe';

@Pipe({
  name: 'empGadget'
})
export class EmpGadgetPipe implements PipeTransform {

  transform(input: number): string {
   let result:string = '';
   if(input == 1 ){
      result = 'Outstanding';
   }else if(input == 2){
    result = 'Excellent';
   }else if(input == 3){
    result = 'Good';
   }else result = 'Average';
   return result;
  }

}
