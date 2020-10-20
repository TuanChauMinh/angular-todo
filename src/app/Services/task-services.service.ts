import { Injectable } from '@angular/core';
import { ToDoItem } from "../model/todoItem";
import { TodoList } from "../model/TodoList";
import { StatusEnum } from "../model/StatusEnum";
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})


export class TaskServices {

  private list  : ToDoItem[] = this.GetFromDB();

  GetFromDB(): ToDoItem[] {
    var taskList : ToDoItem[] = [];
      var getTaskItem = this.dbService.getAll('task').subscribe(record => {
        record.forEach(element => {
          console.log("add GetFromDB");
          taskList.push(new ToDoItem(element.task, element.desc, element.completed, element.status,element.id));
          console.log(this.list);

        });
      });
      return taskList;
  }

  constructor(private dbService : NgxIndexedDBService) {
  }

  InitialTask() : ToDoItem[]{
    return this.list;
  }

  GetItem(){
    var getTaskItem = this.dbService.getAll('task').subscribe(record => {
      record.forEach(element => {
        console.log("add GetItem");
        this.list.push(new ToDoItem(element.task, element.desc, element.completed, element.status,element.id));
      });
    });
  }

  UpdateTaskCompleted(item: ToDoItem) {
    // console.log("UpdateTaskCompleted: " + value);
    this.dbService
    .update('task', {
      id: item.id,
      task: item.task,
      desc: item.description,
      status: item.status,
      completed: item.complete
    })
    .subscribe((storeData) => {
      console.log('storeData: ', storeData);
    });
  }

  AddItem(item: ToDoItem){
    console.log("add AddItem");
    this.list.push(item);
    this.dbService.add('task', {
      task: item.task,
      desc: item.description,
      completed: false,
      status: item.status
    })
    .subscribe((key) => {
      console.log('key: ', key);
    });
  }

}
