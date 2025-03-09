const container = document.querySelector(".todo-container");
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDo() {
    localStorage.setItem("ToDo", JSON.stringify(toDos));
}

function paintToDo(newToDoObj) {
    const div = document.createElement("div");
    div.id = newToDoObj.id;
    div.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = newToDoObj.completed || false;
    checkbox.addEventListener("change", handleCheckbox);

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    if (newToDoObj.completed) {
        span.style.textDecoration = "line-through";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="bi bi-trash3"></i>`;
    deleteBtn.addEventListener("click", handleDeleteBtn);
    
    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(deleteBtn);
    toDoList.appendChild(div);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";
    
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        completed: false,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

function handleCheckbox(event) {
    const div = event.target.parentElement;
    const span = div.querySelector("span");
    const toDo = toDos.find((item) => item.id === parseInt(div.id));
    
    if (toDo) {
        toDo.completed = event.target.checked;
        span.style.textDecoration = toDo.completed ? "line-through" : "none";
        saveToDo();
    }
}

function handleDeleteBtn(event) {
    const div = event.target.closest(".todo-item");
    div.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(div.id));
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("ToDo");

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}