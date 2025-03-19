function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Hapus</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Reset input
}

function deleteTask(button) {
    let taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function editTask(button) {
    let taskItem = button.parentElement.parentElement;
    let taskSpan = taskItem.querySelector("span");

    let newText = prompt("Edit tugas:", taskSpan.innerText);
    if (newText !== null && newText.trim() !== "") {
        taskSpan.innerText = newText.trim();
    }
}
