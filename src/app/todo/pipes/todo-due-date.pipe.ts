import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'todoDueDate',
  standalone: true,
})
export class TodoDueDatePipe implements PipeTransform {
  transform(value: Date) {
    return format(value, 'dd.MM.yyyy');
  }
}
