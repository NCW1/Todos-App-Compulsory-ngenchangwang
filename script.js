const tasks = [];

function addTask() {
	const task = prompt("Enter a new task: ");

	if (typeof task === "string" && task.trim() === "") {
		alert("Please add a task!");
	}
	else {
		tasks.push(task);
		alert("Task added!");
	}
}

function viewTasks() {
	let taskList = "Tasks:\n";

	for (const task of tasks) {
		taskList += `- ${task}\n`;
	}

	alert(taskList);
}