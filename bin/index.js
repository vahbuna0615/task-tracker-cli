#!/usr/bin/env node

const { addTask, updateTask, deleteTask, mark, list } = require("../lib/task")

const args = process.argv.slice(2)

const commands = {
  add: addTask,
  update: updateTask,
  delete: deleteTask,
  mark: mark,
  list: list
}

const command = args[0]
const handlerFn = commands[command]

handlerFn(args)