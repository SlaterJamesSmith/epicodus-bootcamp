import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    new Task('Finish Angular homework for Epicodus course.', '3'),
    new Task('Brainstorm possible JS group projects.', '1'),
    new Task('Add README file to last few Angular repos.', '2')
  ];

  priorityColor(currentTask) {
    if (currentTask.priority === '3') {
      return 'bg-danger text-white';
    } else if (currentTask.priority === '2') {
      return 'bg-warning';
    } else {
      return 'bg-light';
    }
  }

  ngOnInit() {
  }


}
