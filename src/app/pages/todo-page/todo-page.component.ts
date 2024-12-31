import { Component, computed, signal } from '@angular/core';
import { Todo } from '../../todo/model/data-model';
import { TodoListComponent } from '../../todo/todo-list/todo-list.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  readonly todos = signal<Todo[]>([
    {
      id: crypto.randomUUID(),
      title: 'Abc',
      description: 'def',
      dueDate: new Date(),
      isDone: false,
    },
  ]);

  readonly doneTodos = computed(() => {
    return this.todos().filter((todo) => todo.isDone);
  });

  readonly notDoneTodos = computed(() => {
    return this.todos().filter((todo) => !todo.isDone);
  });

  deleteClicked(todo: Todo) {
    const todosWithoutRemoved = this.todos().filter((currentTodo) => {
      return currentTodo.id !== todo.id;
    });

    this.todos.set(todosWithoutRemoved);
  }

  doneClicked(todo: Todo) {
    todo.isDone = true;
    this.todos.set([...this.todos()]);
  }
}
