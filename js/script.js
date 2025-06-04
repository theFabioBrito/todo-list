function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = `${taskInput.value} - ${taskTime.value}`;
    
    // Marcar como concluído
    taskText.onclick = function() {
        li.classList.toggle("completed");
    };

    // Botão de remover individual
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(taskText);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskTime.value = "";
}

// Limpar todas as tarefas
function clearAll() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
