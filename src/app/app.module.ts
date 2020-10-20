import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { StatusDropDownComponent } from './Components/status-drop-down/status-drop-down.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { ToDoItem } from "./model/todoItem";

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'task',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'name', options: { unique: false } },
      { name: 'desc', keypath: 'desc', options: { unique: false } },
      { name: 'status', keypath: 'status', options: { unique: false }}
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    StatusDropDownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
