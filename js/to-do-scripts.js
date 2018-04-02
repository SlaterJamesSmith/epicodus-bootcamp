//Business Logic
function Task(name, date, instructions) {
  this.taskName = name;
  this.dueDate = date;
  this.instructions = instructions;
}

$(document).ready(function() {
  $("form#taskInput").submit(function(event) {
    event.preventDefault();

    var taskName = $("input#taskName").val();
    var dueDate = $("input#dueDate").val();
    var instructions = $("input#instructions").val();

    var newTask = new Task(taskName, dueDate, instructions);
    console.log(newTask);
  });
});
