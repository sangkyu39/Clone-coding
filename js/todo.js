const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "toDos";
 
function saveToDos() {
    // Make toDos string
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteToDo(event) {
    //check target button 
    const li = event.target.parentElement;
    //parseInt : string -> number
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo.text;
    button.innerText = "X";

    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;

    //clear Input fields
    toDoInput.value = '';

    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDOs = localStorage.getItem(TODOS_KEY);

if (savedToDOs) {
    const parsedToDOs = JSON.parse(savedToDOs);
    toDos = parsedToDOs;
    parsedToDOs.forEach(paintToDo);
}