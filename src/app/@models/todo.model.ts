// 定義型別
// 方法A (interface 只在開發階段使用，打包的時候不會包在裡面)
// 從資料庫接收資料，建議用這個方法就好
export interface Todo {
  status: boolean;
  task: string;
  Editing: boolean;
}

// 方法B
// export class TodoClass {
//   status: boolean;
//   task: string;

//   // 代表沒有給值的狀態：task會為string ; status 會為false，若有給值時，則會變成那個值。
//   constructor(_task: string, _status: boolean = false) {
//     this.task = _task;
//     this.status = _status;
//   }

//   toggle() {
//     this.status = !this.status;
//   }
// }
