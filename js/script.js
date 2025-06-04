function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    // Adicionar botão de remoção
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
