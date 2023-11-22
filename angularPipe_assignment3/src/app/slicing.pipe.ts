import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicing'
})
export class SlicingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
