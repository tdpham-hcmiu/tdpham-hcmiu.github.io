document.getElementById("taskInput").addEventListener("keypress", (e) => {
    if (e.key == "Enter") addTask();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            taskDiv.classList.toggle("completed");

            if (taskDiv.classList.contains("completed")) {
                taskList.appendChild(taskDiv); // Move to end if completed
            } else {
                taskList.insertBefore(taskDiv, taskList.lastChild);
            }
        });

        const taskContent = document.createElement("label");
        taskContent.innerText = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskDiv);
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);
        taskInput.value = "";
    }
}
