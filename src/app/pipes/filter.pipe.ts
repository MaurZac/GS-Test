import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg:any): any {
    if(arg.length < 2 || arg === '' ) return value;
    const resultEmplo = [];
    for(const emplo of value){
      if(emplo.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultEmplo.push(emplo);
      }
      
    }
    return resultEmplo;
  }

}
