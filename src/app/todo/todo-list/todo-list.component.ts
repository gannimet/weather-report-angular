import { booleanAttribute, Component, input, output } from '@angular/core';
import { Todo } from '../model/data-model';
import { TodoDueDatePipe } from '../pipes/todo-due-date.pipe';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoDueDatePipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  readonly todos = input.required<Todo[]>();
  readonly showMarkDoneButton = input(false, { transform: booleanAttribute });
  readonly deleteClicked = output<Todo>();
  readonly doneClicked = output<Todo>();
}
