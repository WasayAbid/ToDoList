class Task {
    identifier: number;
    description: string;
    isDone: boolean;

    constructor(identifier: number, description: string) {
        this.identifier = identifier;
        this.description = description;
        this.isDone = false;
    }
}

class ToDoList {
    private taskList: Task[] = [];
    private currentId: number = 1;

    createTask(description: string): void {
        const newTask = new Task(this.currentId, description);
        this.taskList.push(newTask);
        this.currentId++;
        console.log(`Added task: ${description}`);
    }

    deleteTask(identifier: number): void {
        this.taskList = this.taskList.filter(task => task.identifier !== identifier);
        console.log(`Deleted task with id: ${identifier}`);
    }

    displayTasks(): void {
        if (this.taskList.length === 0) {
            console.log('No tasks to display.');
            return;
        }
        console.log('Current Tasks:');
        this.taskList.forEach(task => {
            console.log(`${task.identifier}: ${task.description} [${task.isDone ? 'Completed' : 'Pending'}]`);
        });
    }

    markTaskAsDone(identifier: number): void {
        const task = this.taskList.find(task => task.identifier === identifier);
        if (task) {
            task.isDone = true;
            console.log(`Marked task with id ${identifier} as done.`);
        } else {
            console.log(`Task with id ${identifier} not found.`);
        }
    }
}

// Example usage:
const myTaskManager = new ToDoList();
myTaskManager.createTask('Buy groceries');
myTaskManager.createTask('Walk the dog');
myTaskManager.displayTasks();
myTaskManager.markTaskAsDone(1);
myTaskManager.displayTasks();
myTaskManager.deleteTask(2);
myTaskManager.displayTasks();