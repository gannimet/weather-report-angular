import { computed, Injectable, signal } from '@angular/core';

export type Todo = {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  done: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = signal<Todo[]>([
    {
      id: 'djfhsajk',
      title: 'Create dialog',
      description: 'We need a dialog to create and edit TODOs',
      dueDate: new Date('2024-10-27'),
      done: false,
    },
    {
      id: 'lkfasdjd',
      title: 'Remove button',
      description: 'Add a button to each todo item to remove it from the list',
      dueDate: new Date('2024-10-28'),
      done: false,
    }
  ]);

  numberOfTodos = computed(() => {
    const todos = this.todos();

    return todos.length;
  });

  isTodosListEmpty = computed(() => {
    return this.numberOfTodos() === 0;
  });

  createTodo(title: string, description: string, dueDate: Date) {
    const todo: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      dueDate,
      done: false,
    };

    this.todos.update((oldList) => [...oldList, todo]);

    return todo;
  }

  removeTodo(id: string) {
    const todoList = this.todos();
    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    if (todoIndex < 0) {
      return undefined;
    }

    const removedElements = todoList.splice(todoIndex, 1);
    this.todos.set([...todoList]);

    if (removedElements.length === 0) {
      return undefined;
    }

    if (removedElements.length === 1) {
      return removedElements[0];
    }

    throw new Error('Illegal state: multiple todos were affected by delete call with ID')
  }

  editTodo(id: string, title: string, description: string, dueDate: Date) {
    const todoList = this.todos();
    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    if (todoIndex < 0) {
      return undefined;
    }

    const existingTodo = todoList[todoIndex];

    const newTodo: Todo = {
      ...existingTodo,
      title,
      description,
      dueDate,
    };
    todoList[todoIndex] = newTodo;

    this.todos.set([...todoList]);
    
    return newTodo;
  }
}
