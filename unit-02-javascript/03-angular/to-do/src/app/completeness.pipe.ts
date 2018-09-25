import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './models/task.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness) {
    let output: Task[] = [];
    if (desiredCompleteness === 'incompleteTasks') {
      input.forEach(function(task) {
        if (task.done === false) {
          output.push(task);
        }
      });
      return output;
    } else if (desiredCompleteness === 'completedTasks') {
      input.forEach(function(task) {
        if (task.done === true) {
          output.push(task);
        }
      });
      return output;
    } else {
      return input;
    }
  }
}
