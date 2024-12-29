import { TodoDueDatePipe } from './todo-due-date.pipe';

describe('TodoDueDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TodoDueDatePipe();
    expect(pipe).toBeTruthy();
  });
});
