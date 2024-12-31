import { Component, computed, signal } from '@angular/core';
import { Todo } from '../../todo/model/data-model';
import { TodoDialogComponent } from '../../todo/todo-dialog/todo-dialog.component';
import { TodoListComponent } from '../../todo/todo-list/todo-list.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoListComponent, TodoDialogComponent],
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
    return this.todos()
      .filter((todo) => todo.isDone)
      .toSorted((a, b) => {
        return a.dueDate.getTime() - b.dueDate.getTime();
      });
  });

  readonly notDoneTodos = computed(() => {
    return this.todos()
      .filter((todo) => !todo.isDone)
      .toSorted((a, b) => {
        return a.dueDate.getTime() - b.dueDate.getTime();
      });
  });

  onNewTodoCreated(newTodo: Todo) {
    this.todos.set([...this.todos(), newTodo]);
  }

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
