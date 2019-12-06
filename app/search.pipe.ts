import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerEmailFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.employee_name.toLocaleLowerCase().includes(args)) || (val.employee_salary.toLocaleLowerCase().includes(args)) ||
      (val.employee_age.toLocaleLowerCase().includes(args)) || (val.id.toLocaleLowerCase().includes(args));
      return rVal;
    });

  }
}
