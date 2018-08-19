import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  taskList = [];
  taskName: string = "";
  @ViewChild('taskInput') input;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afAuth: AngularFireAuth, public app: App) {

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

  logout() {
    return this.afAuth.auth.signOut().then(authData => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }

  updateTask(index) {
    let alert = this.alertCtrl.create({
      title: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Update', handler: data => { this.taskList[index] = data.editTask; } }
      ]
    });
    alert.present();
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

}
