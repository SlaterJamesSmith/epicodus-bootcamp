import { Component } from '@angular/core';
import { Task } from './models/task.model';

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

  masterTaskList: Task[] = [
    new Task('Finish Angular homework for Epicodus course.', '3'),
    new Task('Brainstorm possible JS group projects.', '1'),
    new Task('Add README file to last few Angular repos.', '2')
  ];

  selectedTask = null;
  currentFocus: string = 'Angular Homework';

  addTask(newTask: Task) {
    this.masterTaskList.push(newTask);
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishEdit() {
    this.selectedTask = null;
  }
}
