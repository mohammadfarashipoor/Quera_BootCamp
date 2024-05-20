// use this tasks to test your code
const tasks = require("./data.json");

function reminder(data, currentDate) {
  const currentTime = new Date(currentDate);
  const tasksReminder = [];
  data.forEach((task) => {
    const taskTime = new Date(task.date);
    const timeDiff = (taskTime - currentTime) / (1000 * 60 * 60);
    let stateTask = "";
    if (timeDiff >= 3) {
      stateTask = `wait for it : ${task.title}`;
    } else if (timeDiff >= 0) {
      stateTask = `just do it : ${task.title}`;
    } else {
      stateTask = `too late : ${task.title}`;
    }
    tasksReminder.push(stateTask);
  });
  return tasksReminder;
}

console.log(reminder(tasks, "2024-01-15T20:00:00Z"));

module.exports = reminder;
