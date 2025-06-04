Lex, eu preciso fazer uma página web de ToDo List. Preciso que você leve em conta:

Página HTML com responsividade;
Página dedicada a estilização com CSS;
Java Script para adicionar elementos incrementais.

Essa página vai subir na minha página GitHub, então precisamos verificar se o repositório está configurado de forma correta.
Após todos os requisitos acima, precisaremos fazer o deploy, ou seja, colocar o site em produção. 

Vamos seguir um passo a passo, começando por onde você acredita que seja mais pertinente.


Perfeito, Fabio. Agora vamos trabalhar de forma organizada e metódica. Como isso envolve várias camadas — código, versionamento e deploy — **vou montar o seu roteiro estratégico por fases.**

---

## ✅ ETAPA 1 — Estrutura Inicial do Projeto

**Objetivo:** Criar a base do projeto localmente, onde desenvolveremos HTML, CSS e JS separadamente.

### 1.1 — Criação da pasta de projeto

No seu computador:

```bash
mkdir todo-list
cd todo-list
```

### 1.2 — Estrutura básica de diretórios

```bash
mkdir css js
touch index.html css/style.css js/script.js
```

Agora você já tem:

* `index.html` — Página principal.
* `css/style.css` — Estilo.
* `js/script.js` — Lógica.

---

## ✅ ETAPA 2 — Inicialização do Repositório Git

Agora vamos garantir que o repositório Git esteja pronto para integração com o GitHub.

### 2.1 — Inicializando o Git

No diretório do projeto:

```bash
git init
git add .
git commit -m "Estrutura inicial do projeto ToDo List"
```

### 2.2 — Criando o repositório no GitHub

* Acesse seu GitHub.
* Crie um novo repositório (ex: `todo-list`).
* NÃO inicialize com README, licença ou .gitignore — pois já estamos inicializados localmente.

### 2.3 — Vinculando o repositório remoto

Pegue o link do repositório criado (ex.: `https://github.com/seu-usuario/todo-list.git`).

No terminal:

```bash
git remote add origin https://github.com/seu-usuario/todo-list.git
git branch -M main
git push -u origin main
```

---

## ✅ ETAPA 3 — Desenvolvimento do Código

Agora que o projeto está configurado, partiremos para o desenvolvimento do ToDo List.

### 3.1 — Estrutura básica do `index.html`

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo List</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>Minha Lista de Tarefas</h1>
        <div class="input-container">
            <input type="text" id="taskInput" placeholder="Digite sua tarefa">
            <button onclick="addTask()">Adicionar</button>
        </div>
        <ul id="taskList"></ul>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
```

### 3.2 — CSS em `css/style.css` (responsivo)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 90%;
    max-width: 500px;
}

.input-container {
    display: flex;
    margin-bottom: 20px;
}

.input-container input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
}

.input-container button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background: #007bff;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px;
    background: #f1f1f1;
    margin-bottom: 10px;
    border-radius: 5px;
}
```

### 3.3 — JavaScript `js/script.js`

```javascript
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
```

---

## ✅ ETAPA 4 — Deploy no GitHub Pages

Após o código finalizado e commitado:

### 4.1 — Subir o código

```bash
git add .
git commit -m "Versão funcional do ToDo List"
git push
```

### 4.2 — Ativar o GitHub Pages

* Vá em **Settings** do repositório no GitHub.
* Selecione a aba **Pages**.
* Em **Source**, selecione o branch `main` e a pasta raiz (root).
* Clique em **Save**.

Pronto. Seu site estará publicado em:
`https://seu-usuario.github.io/todo-list/`

---

**OBS IMPORTANTE:**
Esse modelo inicial é básico, mas já responsivo, modularizado e pronto para subir no GitHub Pages.

---

## ✅ Agora:

Se você autorizar, partimos para a execução prática:

* ✅ Criamos o repositório
* ✅ Subimos a estrutura básica
* ✅ Eu te acompanho linha a linha no deploy

**Podemos iniciar a ETAPA 1?**
Se sim, me confirme o nome do repositório que você quer utilizar.
