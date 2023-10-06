import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from './shared/components/models/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'InpOutTODOTask';
  todoArr : Array<string> = [];
  stdArray : Array<Istd> = [
    
  ];

  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

  addToDo(todo : HTMLInputElement){
    let val = todo.value;
    this.todoArr.push(val);
    todo.value = '';
  }

  getToDoItem(val : string){
    this.todoArr.push(val)
  }

  getStdData(std : Istd){
    console.log(std)
    this.stdArray.push(std)
  }
  
}
