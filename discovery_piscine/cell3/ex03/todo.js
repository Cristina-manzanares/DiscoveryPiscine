// Función para crear un nuevo TO DO
function createTodo() {
    var todoText = prompt("Nuevo TO DO:");
    if (todoText !== null && todoText !== "") {
      var todo = document.createElement("div");
      todo.className = "todo";
      todo.innerHTML = todoText;
      todo.onclick = function() {
        deleteTodo(this);
      };
      var ftList = document.getElementById("ft_list");
      ftList.insertBefore(todo, ftList.firstChild);
      saveTodoList();
    }
  }

  // Función para eliminar un TO DO
  function deleteTodo(todo) {
    var confirmDelete = confirm("¿Deseas eliminar este TO DO?");
    if (confirmDelete) {
      var ftList = document.getElementById("ft_list");
      ftList.removeChild(todo);
      saveTodoList();
    }
  }

  // Función para guardar la lista de TO DOs en una cookie
  function saveTodoList() {
    var todos = document.getElementsByClassName("todo");
    var todoList = [];
    for (var i = 0; i < todos.length; i++) {
      todoList.push(todos[i].innerHTML);
    }
    document.cookie = "todoList=" + JSON.stringify(todoList);
  }

  // Función para cargar la lista de TO DOs desde la cookie
  function loadTodoList() {
    var todoListCookie = document.cookie.replace(/(?:(?:^|.*;\s*)todoList\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (todoListCookie !== "") {
      var todoList = JSON.parse(todoListCookie);
      var ftList = document.getElementById("ft_list");
      for (var i = 0; i < todoList.length; i++) {
        var todo = document.createElement("div");
        todo.className = "todo";
        todo.innerHTML = todoList[i];
        todo.onclick = function() {
          deleteTodo(this);
        };
        ftList.appendChild(todo);
      }
    }
  }

  // Cargar la lista de TO DOs al cargar la página
  loadTodoList();