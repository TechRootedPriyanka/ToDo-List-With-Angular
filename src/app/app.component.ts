import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { timeStamp } from 'console';
import { Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ToDo';
  Date = new Date();
  name = 'Priyanka Shahasane';

  todoValue:string;
  list:Todo[];

  ngOnInit(){ this.list = []; this.todoValue = ""; }

  addItem(){
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem( id:number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
