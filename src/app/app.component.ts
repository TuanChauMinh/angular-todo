import { Component, Input } from '@angular/core';
import { ToDoItem } from './model/todoItem';
import { TodoList } from './model/TodoList';
import { TaskServices } from './Services/task-services.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { StatusEnum } from './model/StatusEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  constructor(private dbService: NgxIndexedDBService) {}


  public TaskServices = new TaskServices(this.dbService);

  get itemCount(): number {
    return this.Items.length;
  }
  get Items(): readonly ToDoItem[] {
    return this.TaskServices.InitialTask().filter(
      (item) => this.showComplete || !item.complete
    );
  }

  addItem(newTitle: string, newDesc: string) {
    if (newTitle != '') {
      var newTask = new ToDoItem(newTitle, newDesc, false, StatusEnum.ToDo);
      this.TaskServices.AddItem(newTask);
    }
  }
  showComplete: boolean = false;

  UpdateComplete(item: ToDoItem) {
    this.TaskServices.UpdateTaskCompleted(item);
  }

  getEnumKeyByEnumValue(myEnum, enumValue)  {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : null;
  }
  public onDropDownSelected(item: ToDoItem, event: string) {
    item.status = StatusEnum[this.getEnumKeyByEnumValue(StatusEnum, event)];
    this.TaskServices.UpdateTaskCompleted(item);

  }
}
