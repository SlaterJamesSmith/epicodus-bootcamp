import { Component } from '@angular/core';
import { Task } from './models/task.model'

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

  tasks: Task[] = [
    new Task('Finish Angular homework for Epicodus course.', '3'),
    new Task('Brainstorm possible JS group projects.', '1'),
    new Task('Add README file to last few Angular repos.', '2')
  ];

  selectedTask: Task = this.tasks[0];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  priorityColor(currentTask) {
    if (currentTask.priority === '3') {
      return 'bg-danger text-white';
    } else if (currentTask.priority === '2') {
      return 'bg-warning';
    } else {
      return 'bg-light';
    }
  }
}
