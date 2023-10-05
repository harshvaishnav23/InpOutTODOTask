import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
 @Output() getToDo : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  addToDo(todo : HTMLInputElement){
    let val = todo.value;

    this.getToDo.emit(val)
    todo.value = ''
  }

}
