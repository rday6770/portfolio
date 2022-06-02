const taskListRoot = document.getElementById("taskListRoot");

let taskList = [];

function handleOpenModal() {
  const modalRoot = document.getElementById("modalRoot");
  const modalContent = document.getElementById("modalContent");
  modalRoot.style.display = "flex";
  modalContent.style.display = "block";
}

function handleCloseModal() {
  const modalRoot = document.getElementById("modalRoot");
  const modalContent = document.getElementById("modalContent");
  modalRoot.style.display = "none";
  modalContent.style.display = "none";
}

function handleAddNewTaskSubmit(event) {
  event.preventDefault();
  const [nameEl, dudeDateEl, priorityEl, estimateHoursEl, estimateMinutesEl] =
    event.target;

  const task = {
    id: taskList.length + 1,
    name: nameEl.value,
    dueDate: dudeDateEl.value,
    priority: priorityEl.value,
    estimatedHours: estimateHoursEl.value,
    estimatedMinutes: estimateMinutesEl.value,
    completed: false,
  };

  taskList.push(task);
  renderTask(task);
  event.target.reset();
  handleCloseModal();
}

function handleDeleteTask(taskId) {
  taskList = taskList.filter((t) => t.id !== taskId);
  const item = document.getElementById(`task-${taskId}`);
  item.remove();
}

function handleToggleComplete(taskId) {
  const taskIndex = taskList.findIndex((t) => t.id === taskId);
  const task = taskList[taskIndex];
  const newTask = { ...task, completed: !task.completed };
  taskList[taskIndex] = newTask;
  updateTask(newTask);
}

function makeTaskHtml(task) {
  return `
    <div class="task-box-element-one priority-${task.priority}"></div>
    <div class="task-box-content">
      <div class="task-box-header">
        <p>${task.name}</p>
      </div>
      <div class="task-box-subheader">
        <p>Due Date: ${task.dueDate}</p>
      </div>
    </div>
    <div class="task-box-element-two">
      <p>${task.estimatedHours}H</p>
      <p>${task.estimatedMinutes}M</p>
    </div>
    <div onclick="handleToggleComplete(${task.id})" class="task-box-element-three completed-${task.completed}"></div>
    <button onclick="handleDeleteTask(${task.id})" class="task-box-delete">Delete</button>
  `;
}

function updateTask(task) {
  const taskId = task.id;
  const node = document.getElementById(`task-${taskId}`);
  const newItem = document.createElement("div");
  newItem.setAttribute("id", `task-${task.id}`);
  newItem.setAttribute("class", "task-box");
  newItem.innerHTML = makeTaskHtml(task);
  node.replaceWith(newItem);
}

function renderTask(task) {
  const item = document.createElement("div");
  item.setAttribute("id", `task-${task.id}`);
  item.setAttribute("class", "task-box");
  item.innerHTML = makeTaskHtml(task);
  taskListRoot.appendChild(item);
}
