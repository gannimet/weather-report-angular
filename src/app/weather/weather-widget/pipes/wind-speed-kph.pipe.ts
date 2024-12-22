import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeedKph',
  standalone: true
})
export class WindSpeedKphPipe implements PipeTransform {

  transform(value: number) {
    return `${value} km/h`;
  }

}
