const Todo = require("./todo");
require("colors");
class Todos {
  _list = {};
  constructor() {
    this._list = {};
  }

  //Esta funcion crea un array de cada uno de los
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

  AllTodos = () => {
    this.listTodos.forEach((todo, index) => {
      const idx = `${index + 1}`.blue;
      console.log(
        `${idx}`,
        `${todo.description}`.yellow,
        `${todo.completedAt ? "Completada".green : "Pendiente".red}`
      );
    });
  };

  ListCompltedTodos = (completed) => {
    this.listTodos.forEach((todo, index) => {
      const idx = `${index + 1}`.blue;
      if (completed === true) {
        todo.completedAt
          ? console.log(
              `${idx}`,
              `${todo.description}`.yellow,
              ` ${todo.completedAt ? "Completada".green : ""}`
            )
          : "";
      } else {
        if (completed === false) {
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
}

module.exports = Todos;
