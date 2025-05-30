# Task tracker CLI

## Project URL
https://roadmap.sh/projects/task-tracker

**Prerequisites -**
- Create a JSON file for storing tasks, provide its path in the .env file.

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
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```

**Task Properties -**

- id
- description
- status (todo, in-progress, done)
- createdAt
- updatedAt

