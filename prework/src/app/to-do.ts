class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string) {}

  markDone() {
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

for(var task of tasks) {
  console.log(task);
}
