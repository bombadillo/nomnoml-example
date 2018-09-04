var nomnoml = require("nomnoml");

class App {
  constructor() {
    this.tasks = [
      {
        taskName: "Wash dishes",
        subTasks: ["do pots", "do pans"]
      },
      {
        taskName: "Learn Python",
        subTasks: ["Watch pluralsight video"]
      },
      {
        taskName: "Watch pluralsight video",
        subTasks: ["take course"]
      }
    ];
  }

  start() {
    this.setupListeners();
    this.createCanvas();
  }

  setupListeners() {
    document
      .getElementById("add-task")
      .addEventListener("click", e => this.addTask(e));
  }

  createCanvas() {
    var canvas = document.getElementById("target-canvas");

    var nomlContents = "#.grey: fill=#48E07B bold \n";

    for (var task of this.tasks) {
      for (var subTask of task.subTasks) {
        nomlContents += `[<grey> ${task.taskName}]-:>[${subTask}] \n`;
      }
    }

    nomnoml.draw(canvas, nomlContents);
  }

  addTask() {
    this.tasks.push({ taskName: "do pots", subTasks: ["scrub"] });
    this.createCanvas();
  }
}

var app = new App();

app.start();
