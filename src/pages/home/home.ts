import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  taskList = [];
  taskName: string = "";
  @ViewChild('taskInput') input;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.input.setFocus();
    }, 500);
  }

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
    this.input.setFocus();
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

}
