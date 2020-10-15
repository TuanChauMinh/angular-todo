import { ToDoItem } from '../model/todoItem'

export class TodoList {
  constructor(public user:string, public todoItems: ToDoItem[] = [])
  {
  }

  getItems(): readonly ToDoItem[] {
    return this.todoItems;
  }

  addItem(task: string){
    this.todoItems.push(new ToDoItem(task));
  }
}
