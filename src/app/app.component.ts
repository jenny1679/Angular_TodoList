import { Component } from '@angular/core';
import { Todo } from './@models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '待辦事項';
  placeholder = '請輸入待辦事項';

  toggleAllBtn = false;
  // check1 = false;
  // check2 = false;

  todoDataList:Todo[] = [
    { status: false, task: '任務1' },
    { status: false, task: '任務2' },
    { status: true, task: '任務3' }
  ];

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    // 一開始的寫法
    // this.check1 = this.toggleAllBtn;
    // this.check2 = this.toggleAllBtn;
    this.todoDataList.forEach(data => {
      data.status = this.toggleAllBtn;
    })
  }

  clickCheck(item: Todo) {
    item.status = !item.status;
  }

  delete(index: number) {
    this.todoDataList.splice(index, 1); //刪除一個
  }

  // add(event: KeyboardEvent) {
  //   if (event.key === 'Enter') {
  //     const value = (event.target as HTMLInputElement).value;
  //     this.todoDataList.push({
  //       status: false, task: value
  //     });
  //     (event.target as HTMLInputElement).value = '';
  //   }
  // }
  // 【範本變數】自訂變數 可以取到元素(上方修改成下方範例)
  // add(event: KeyboardEvent, input: HTMLInputElement) {
  //   if (event.key === 'Enter') {
  //     this.todoDataList.push({
  //       status: false, task: input.value
  //     });
  //     input.value = '';
  //   }
  // }
  // 【案件事件過濾】(上方修改成下方範例)
  add(input: HTMLInputElement) {
    this.todoDataList.push({
      status: false, task: input.value
    });
    input.value = '';
  }
}
