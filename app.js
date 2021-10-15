let inputBox = document.querySelector("#new-todo");
let inputBtn = document.getElementById("input-btn");
let todoList = document.getElementById("lists");
let displayMode = document.getElementById("moonsun").getElementsByTagName("img")[0];

displayMode.addEventListener("click", (e) => {
    console.log(displayMode)
    document.getElementsByTagName("body")[0].classList.add("dark");
    document.querySelector("input").classList.add("dark");
})

let todoValue = '';
inputBox.addEventListener("change", (e) => {
    const text = e.target.value;
    todoValue = text
});

inputBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoValue) {
        inputBox.value = '';
        addTodo(todoValue);
        todoValue = '';
    }
})

function addTodo(todoValue) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("list");

    const todoCircle = document.createElement("button");
    todoCircle.classList.add("circle");
    todoCircle.innerHTML = '<img src="images/icon-check.svg" alt="check-img">';

    const todoNewList = document.createElement("li");
    todoNewList.classList.add("list-item");
    todoNewList.innerHTML = todoValue;

    const todoCross = document.createElement("button");
    todoCross.classList.add("cross");
    todoCross.innerHTML = '<img src="images/icon-cross.svg" alt="cross-img" class="cross">'

    document.querySelector("#lists").appendChild(todoDiv);
    todoDiv.appendChild(todoCircle);
    todoDiv.appendChild(todoNewList);
    todoDiv.appendChild(todoCross);

    todoCircle.addEventListener('click', (e) => {
        if (todoCircle.classList.contains("checked")) {
            todoCircle.classList.remove("checked");
            todoNewList.style.cssText = 'text-decoration: none';
        }
        else {
            todoCircle.classList.add("checked");
            todoNewList.style.cssText = 'text-decoration: line-through'
        }
        count_list();
    })

    todoCross.addEventListener('click', (e) => {
        const target_delete = e.target;
        if (target_delete.classList.contains("cross")) {
            const todoToRemove = target_delete.parentElement.parentElement;
            todoToRemove.remove();
        }
        count_list();
    })  

    count_list();
    
}

function count_list() {
    let todos = todoList.childNodes;
    let num_of_list = 0;
    for (let i = 3; i < todos.length; i++) {
       if (!(todos[i].childNodes[0].classList.contains("checked"))) {
           num_of_list++;
       }
    }
    document.getElementById("number-of-todo").innerText = num_of_list;
}

activeListBtn = document.querySelector(".active-list");
activeListBtn.addEventListener("click", filteredTodoActive);
function filteredTodoActive(e) {
    let todos = todoList.childNodes;
    for (let i = 3; i < todos.length; i++) {
        if (todos[i].childNodes[0].classList.contains("checked")) {
            todos[i].style.display = "none";
        }
    }
    count_list();
}

allListBtn = document.querySelector(".all-list");
allListBtn.addEventListener("click", filteredTodoAll);
function filteredTodoAll(e) {
    let todos = todoList.childNodes;
    for (let i = 3; i < todos.length; i++) {
        todos[i].style.display = "";
    }
    count_list();
}

completedListBtn = document.querySelector(".completed-list");
completedListBtn.addEventListener("click", filteredTodoCompleted);
function filteredTodoCompleted(e) {
    let todos = todoList.childNodes;
    for(let i = 3; i < todos.length; i++) {
        if (todos[i].childNodes[0].classList.contains("checked")) {
            todos[i].style.display = "";
        }
        else {
            todos[i].style.display = "none";
        }
    }
    count_list();
}

clearCompletedBtn = document.querySelector(".clear-completed");
clearCompletedBtn.addEventListener("click", clearCompleted);
function clearCompleted(e) {
    let todos = todoList.childNodes;
    console.log(todos);
    for(let i = 3; i < todos.length; i++) {
        if (todos[i].childNodes[0].classList.contains("checked")) {
            console.log(i);
            todos[i].remove();
        }
    }
    count_list();
}
