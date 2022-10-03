const Todo = require("./todo");
require("colors");
class Todos {
  _list = {};
  constructor() {
    this._list = {};
  }

  //Esta funcion crea un array de cada uno de los todo
  get listTodos() {
    let list = [];
    Object.keys(this._list).forEach((key) => {
      list.push(this._list[key]);
    });
    return list;
  }
  todosFromArray = (todos = []) => {
    todos.forEach((todo) => {
      this._list[todo.id] = todo;
    });
  };

  createTodo = (todoDescription) => {
    const todo = new Todo(todoDescription);
    this._list[todo.id] = todo;
  };

  ListAllTodos = () => {
    this.listTodos.forEach((todo, index) => {
      const idx = `${index + 1}`.blue;
      console.log(
        `${idx}`,
        `${todo.description}`.yellow,
        `${todo.completedAt ? "Completada".green : "Pendiente".red}`
      );
    });
  };

  ListByStatus = (status) => {
    this.listTodos.forEach((todo, index) => {
      const idx = `${index + 1}`.blue;
      if (status === true) {
        todo.completedAt
          ? console.log(
              `${idx}`,
              `${todo.description}`.yellow,
              ` ${todo.completedAt ? "Completada".green : ""}`
            )
          : "";
      } else {
        if (status === false) {
          !todo.completedAt
            ? console.log(
                `${idx}`,
                `${todo.description}`.yellow,
                ` ${todo.completedAt ? "" : "Pendiente".red}`
              )
            : "";
        }
      }
    });
  };

  deleteTodo = async (id) => {
    if (this._list[id]) {
      console.log("tarea encontrada");
      delete this._list[id];
    }
  };

  toggleTodos = (ids = []) => {
    ids.forEach((id) => {
      const todo = this._list[id];
      if (!todo.completedAt) {
        todo.completedAt = new Date().toISOString();
      }
    });

    this.listTodos.forEach((todo) => {
      if (!ids.includes(todo.id)) {
        this._list[todo.id].completedAt = null;
      }
    });
  };
}

module.exports = Todos;
