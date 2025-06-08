# Task tracker CLI

## Project URL
https://roadmap.sh/projects/task-tracker

**Prerequisites -**
- Create a JSON file for storing tasks.
- Create a .env file in project directory with **TASKS_PATH** variable set as the file path containing the tasks JSON file.
- Running `npm install -g` installs the task-cli app globally.

**Functions -**

- Add, update, delete tasks
- Mark a task as in progress or done
- List all tasks (all, done, to do, in progress)
- Stores tasks in a JSON file

**Example -**

```
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
# todo = TD, in-progress = IP, done = DN
task-cli mark 1 TD
task-cli mark 1 IP
task-cli mark 1 DN

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list DN
task-cli list TD
task-cli list IP
```

**Task Properties -**

- id
- description
- status (todo, in-progress, done)
- createdAt
- updatedAt

