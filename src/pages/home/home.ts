import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taskList = [];
  taskName: string = "";
  constructor(public navCtrl: NavController) {

  }

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName; 
      this.taskList.push(task);
      this.taskName = "";
    }
  }
}
