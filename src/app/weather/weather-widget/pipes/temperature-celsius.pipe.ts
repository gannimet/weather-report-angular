import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureCelsius',
  standalone: true
})
export class TemperatureCelsiusPipe implements PipeTransform {

  transform(value: number): string {
    return `${value}°`;
  }

}
