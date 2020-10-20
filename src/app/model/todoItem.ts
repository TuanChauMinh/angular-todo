import { StatusEnum } from "./StatusEnum";
export class ToDoItem{

    id: number;
    task:string;
    complete: boolean;
    description: string;
    status: StatusEnum;


    constructor( taskVal:string, taskDesc: string = "Description", completeVal: boolean = false, statusVal: StatusEnum = StatusEnum.ToDo,id: number = 0){
        this.id = id;
        this.task = taskVal;
        this.complete = completeVal;
        this.description = taskDesc;
        this.status = StatusEnum.ToDo;
    }
}
