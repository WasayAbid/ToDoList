var Task = /** @class */ (function () {
    function Task(identifier, description) {
        this.identifier = identifier;
        this.description = description;
        this.isDone = false;
    }
    return Task;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.taskList = [];
        this.currentId = 1;
    }
    ToDoList.prototype.createTask = function (description) {
        var newTask = new Task(this.currentId, description);
        this.taskList.push(newTask);
        this.currentId++;
        console.log("Added task: ".concat(description));
    };
    ToDoList.prototype.deleteTask = function (identifier) {
        this.taskList = this.taskList.filter(function (task) { return task.identifier !== identifier; });
        console.log("Deleted task with id: ".concat(identifier));
    };
    ToDoList.prototype.displayTasks = function () {
        if (this.taskList.length === 0) {
            console.log('No tasks to display.');
            return;
        }
        console.log('Current Tasks:');
        this.taskList.forEach(function (task) {
            console.log("".concat(task.identifier, ": ").concat(task.description, " [").concat(task.isDone ? 'Completed' : 'Pending', "]"));
        });
    };
    ToDoList.prototype.markTaskAsDone = function (identifier) {
        var task = this.taskList.find(function (task) { return task.identifier === identifier; });
        if (task) {
            task.isDone = true;
            console.log("Marked task with id ".concat(identifier, " as done."));
        }
        else {
            console.log("Task with id ".concat(identifier, " not found."));
        }
    };
    return ToDoList;
}());
// Example usage:
var myTaskManager = new ToDoList();
myTaskManager.createTask('Buy groceries');
myTaskManager.createTask('Walk the dog');
myTaskManager.displayTasks();
myTaskManager.markTaskAsDone(1);
myTaskManager.displayTasks();
myTaskManager.deleteTask(2);
myTaskManager.displayTasks();
