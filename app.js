// ===============================
// Teil 2.1: DOM-Elemente auswählen
// ===============================
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// ===============================
// Teil 2.2: Array für Todos
// ===============================
let todos = [];

// ===============================
// Teil 5.1: LocalStorage Funktionen
// ===============================
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const stored = localStorage.getItem('todos');
    if (stored) {
        todos = JSON.parse(stored);
        renderTodos();
    }
}

// ===============================
// Teil 2.3: Todo hinzufügen
// ===============================
function addTodo() {
    const text = todoInput.value.trim();

    if (text === '') {
        alert('Bitte eine Aufgabe eingeben!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    console.log('DEBUG: Neues Todo hinzugefügt:', todo);

    // !!! IHRE AUFGABE !!!
    todos.push(todo);

    console.log('DEBUG: Alle Todos:', todos);

    saveTodos();
    todoInput.value = '';
    renderTodos();
}

// ===============================
// Teil 4.1: Todo als erledigt markieren
// ===============================
function toggleTodo(id) {
    const todo = todos.find(function (t) {
        return t.id === id;
    });

    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

// ===============================
// Teil 4.2: Todo löschen
// ===============================
function deleteTodo(id) {
    todos = todos.filter(function (t) {
        return t.id !== id;
    });

    saveTodos();
    renderTodos();
}

// ===============================
// Teil 3.1: Einzelnes Todo rendern
// ===============================
function renderTodo(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    if (todo.completed) {
        li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id);
    });

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function () {
        deleteTodo(todo.id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
}

// ===============================
// Teil 3.1: Alle Todos rendern
// ===============================
function renderTodos() {
    todoList.innerHTML = '';

    // !!! HIER VERVOLLSTÄNDIGEN !!!
    todos.forEach(function (todo) {
        renderTodo(todo);
    });
}

// ===============================
// Teil 2.4: Event Listener
// ===============================
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// ===============================
// Initiales Laden
// ===============================
loadTodos();
