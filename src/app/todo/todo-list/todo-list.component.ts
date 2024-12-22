import { Component, inject, output } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  readonly todoService = inject(TodoService);

  editTodo = output<Todo>();
}
