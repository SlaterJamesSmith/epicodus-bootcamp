import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  currentFocus: string = 'Angular Homework';

  selectedTask = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishEdit() {
    this.selectedTask = null;
  }

}
