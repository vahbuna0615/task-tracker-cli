const path = require('path')
require('dotenv').config()
const absPath = path.resolve(process.env.TASKS_PATH)
const tasks = require(absPath)
const fs = require('fs')
const colors = require('colors')
const { createSpinner} = require('../utils/spinner')
const statusOptions = {
  TD: 'todo',
  IP: 'in-progress',
  DN: 'done'
}

// add task
const addTask = (args) => {
  const arr = Object.keys(tasks)
  const arrLen = tasks[arr[arr.length-1]].id + 1 || 1
  
  tasks[`${arrLen}`] = {
    id: arrLen,
    description: args[1],
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  const spinner = createSpinner('Adding task...', 'arc');

  fs.writeFile(absPath, JSON.stringify(tasks, null, 2), function writeJSON(err) {
    if (err) console.log(err);
  })

  setTimeout(() => {
    spinner.stop(colors.green(`Task added successfully (ID: ${arrLen})`));
  }, 2000);

}

// update task
const updateTask = (args) => {

  const id = args[1]
  const desc = args[2]

  const task = tasks[id]

  const updatedTask = {
    ...task,
    description: desc,
    updatedAt: new Date().toISOString()
  }

  tasks[`${id}`] = updatedTask
  
  const spinner = createSpinner('Updating task...', 'dots');

  fs.writeFile(absPath, JSON.stringify(tasks, null, 2), function writeJSON(err) {
    if (err) console.log(err);
  })

  setTimeout(() => {
    spinner.stop(colors.cyan(`Updated task successfully (ID: ${id})`));
  }, 2000);

}

// delete task
const deleteTask = (args) => {

  const id = args[1]

  delete tasks[id]

  const spinner = createSpinner('Deleting task...', 'line');

  fs.writeFile(absPath, JSON.stringify(tasks, null, 2), function writeJSON(err) {
    if (err) console.log(err);
  })

  setTimeout(() => {
    spinner.stop(colors.red(`Deleted task (ID: ${id})`));
  }, 2000);

}

// mark task
const mark = (args) => {

  const id = args[1]
  const status = args[2]

  const task = tasks[id]

  const updatedTask = {
    ...task,
    status: statusOptions[status],
    updatedAt: new Date().toISOString()
  }

  tasks[id] = updatedTask

  const spinner = createSpinner('Marking task...', 'circle');

  fs.writeFile(absPath, JSON.stringify(tasks, null, 2), function writeJSON(err) {
    if (err) console.log(err);
  })

  setTimeout(() => {
    spinner.stop(colors.cyan(`Task ID ${id} marked ${statusOptions[status]}`));
  }, 2000);

}

// return task list
const list = (args) => {
  let allTasks;
  const status = statusOptions[args[1]]

  const spinner = createSpinner('Returning task list...', 'bounce');

  if (!status) {
    allTasks = Object.values(tasks)
  } else {
    allTasks = []
    Object.keys(tasks).map((key) => {
      if (tasks[key].status === status) allTasks.push(tasks[key])
    })
  }

  console.log(colors.magenta(`Task list: `))
  setTimeout(() => {
    spinner.stop(colors.cyan(JSON.stringify(allTasks, null, 2)));
  }, 2000);
}

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  mark,
  list
}