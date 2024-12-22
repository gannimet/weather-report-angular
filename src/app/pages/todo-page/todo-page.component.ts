import { Component, inject } from '@angular/core';
import { TodoListComponent } from "../../todo/todo-list/todo-list.component";
import { Todo, TodoService } from '../../todo/todo.service';
import { TodoDialogComponent } from "../../todo/todo-dialog/todo-dialog.component";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoListComponent, TodoDialogComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  readonly todoService = inject(TodoService);

  editTodo(todo: Todo) {
    console.log('edit:', todo);
  }
}
