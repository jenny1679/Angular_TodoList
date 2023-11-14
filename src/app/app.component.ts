import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './@models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '待辦事項';
  placeholder = '請輸入待辦事項';
  toggleAllBtn = false;

  todoDataList: Todo[] = [
    { status: false, task: '任務1', Editing: false },
    { status: false, task: '任務2', Editing: false },
    { status: true, task: '任務3', Editing: false }
  ];

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach(data => {
      data.status = this.toggleAllBtn;
    });
  }

  clickCheck(item: Todo) {
    item.status = !item.status;
  }

  delete(index: number) {
    this.todoDataList.splice(index, 1);
  }

  // 方法A
  add(value: string) {
    const todo: Todo = {
      status: false,
      task: value,
      Editing: false
    }
    this.todoDataList.push(todo);
  }
  // 方法B
  // add(value: string){
  //   this.todoDataList.push(new TodoClass(value))
  // }

  edit(item: Todo) {
    item.Editing = true;
  }

  update(item: Todo, value: string) {
    item.task = value;
    item.Editing = false;
  }

}


