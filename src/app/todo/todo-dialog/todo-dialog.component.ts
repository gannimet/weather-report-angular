import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [],
  templateUrl: './todo-dialog.component.html',
  styleUrl: './todo-dialog.component.css'
})
export class TodoDialogComponent {
  readonly nativeDialog = viewChild<ElementRef<HTMLDialogElement>>('todoDialog');

  open() {
    this.nativeDialog()?.nativeElement.showModal();
  }

  close() {
    this.nativeDialog()?.nativeElement.close()
  }
}
