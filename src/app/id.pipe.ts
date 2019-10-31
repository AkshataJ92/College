import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(value: any, before: any): any {
    let newStr = `${before} ${value}`;
    return newStr;
  }

}
