function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const li = document.createElement("li");

    // Criação da checkbox (com definição explícita de type antes de qualquer coisa)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("custom-checkbox");  // <- Adicionamos a classe aqui

    // Função de riscar ao marcar
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    // Texto da tarefa com horário
    const taskText = document.createElement("span");
    taskText.textContent = `${taskInput.value} - ${taskTime.value}`;

    // Botão de remover individual
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Montagem final do item
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Limpeza dos campos
    taskInput.value = "";
    taskTime.value = "";
}

function clearAll() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
