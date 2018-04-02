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

    $("#taskList").append("<p><span class='task'>" + newTask.taskName + "</span></p>");

    $(".task").last().click(function () {
      $("#taskShow h2").text(newTask.taskName);
      $("#taskShow ul").append("<li>" + newTask.dueDate + "</li>");
      $("#taskShow ul").append("<li>" + newTask.instructions + "</li>");
      $("#taskShow").show();
      $("#done").click(function() {
        $("#taskShow").hide();
        $(".task").addClass("strike");
      });
    });
  });
});
