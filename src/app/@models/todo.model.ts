export interface Todo {
  status: boolean;
  task: string;
}

export class TodoClass {
  status: boolean = false;
  task: string = '';

  constructor(_task: string, _status: boolean = false){
    this.task = _task;
    this.status = _status;
  }
}

