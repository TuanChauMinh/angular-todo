import { Component } from '@angular/core';
import { ToDoItem } from '../model/todoItem';
import { TodoList } from '../model/TodoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  private list = new TodoList('Bob', [
    new ToDoItem('Go for run', true),
    new ToDoItem('Get flowers'),
    new ToDoItem('Collect tickets'),
  ]);

  get username(): string {
    return this.list.user;
  }
  get itemCount(): number {
    return this.list.todoItems.filter((item) => !item.complete).length;
  }
  get Items(): readonly ToDoItem[]{
    return this.list.todoItems;
  }
}
