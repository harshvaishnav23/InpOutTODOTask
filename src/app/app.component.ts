import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InpOutTODOTask';
  todoArr : Array<string> = [];

  addToDo(todo : HTMLInputElement){
    let val = todo.value;
    this.todoArr.push(val);
    todo.value = '';
  }

  getToDoItem(val : string){
    this.todoArr.push(val)
  }
}
