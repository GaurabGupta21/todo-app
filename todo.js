let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    if (task.completed) taskText.classList.add("completed");

    taskText.onclick = () => toggleComplete(index);

    const btnGroup = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm me-2";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTask(index);

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger btn-sm";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTask(index);

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(delBtn);

    li.appendChild(taskText);
    li.appendChild(btnGroup);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    input.value = "";
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
