import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlreplace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, args?: string): unknown {
    return value.replace("~/","");
  }

}
