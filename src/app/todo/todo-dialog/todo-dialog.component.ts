import { Component, ElementRef, output, viewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Todo } from '../model/data-model';

function toDateInputValue(date: Date) {
  return date.toISOString().substring(0, 10);
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-dialog.component.html',
  styleUrl: './todo-dialog.component.scss',
})
export class TodoDialogComponent {
  readonly saved = output<Todo>();

  readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('todoDialog');

  readonly titleCtrl = new FormControl('', {
    validators: [Validators.required],
  });
  readonly descriptionCtrl = new FormControl('', {
    validators: [Validators.required],
  });
  readonly dueDateCtrl = new FormControl(toDateInputValue(new Date()), {
    validators: [Validators.required],
  });
  readonly todoForm = new FormGroup({
    title: this.titleCtrl,
    description: this.descriptionCtrl,
    dueDate: this.dueDateCtrl,
  });

  open() {
    this.dialog()?.nativeElement.showModal();
  }

  close() {
    this.dialog()?.nativeElement.close();
    this.todoForm.setValue({
      title: '',
      description: '',
      dueDate: toDateInputValue(new Date()),
    });
  }

  onSubmit() {
    const { title, description, dueDate: dueDateStr } = this.todoForm.value;

    if (!title || !description || !dueDateStr) {
      return;
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      dueDate: new Date(dueDateStr),
      isDone: false,
    };

    this.close();
    this.saved.emit(newTodo);
  }
}
