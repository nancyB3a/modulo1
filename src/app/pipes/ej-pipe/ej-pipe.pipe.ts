import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ejPipe'
})
export class EjPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
