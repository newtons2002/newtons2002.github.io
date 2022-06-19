const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const ToDosKey = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(ToDosKey, JSON.stringify(toDos));
}
function deleteToDo(event){
    const li = event.target.parentElement; 
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newToDoObj = {
        text: newTodo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(ToDosKey);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item)=>paintToDo(item));
}