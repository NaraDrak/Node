require("colors");
const {
  inquirerPause,
  inquirerMenu,
  readInput,
  todoToDelete,
  confirMenu,
  showCheckList,
} = require("./helpers/inquirer");
const { saveData, readDB } = require("./helpers/saveData");
const Todos = require("./models/todos");

const main = async () => {
  let opt = "";
  const todos = new Todos();
  const DBdata = readDB();
  if (DBdata) {
    todos.todosFromArray(DBdata);
  }
  todos.todosFromArray(DBdata);

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const description = await readInput("description");
        todos.createTodo(description);
        break;
      case "2":
        todos.ListAllTodos();
        break;
      case "3":
        todos.ListByStatus(true);
        break;
      case "4":
        todos.ListByStatus(false);
        break;
      case "5":
        const ids = await showCheckList(todos.listTodos);
        todos.toggleTodos(ids);
        break;
      case "6":
        const selectedTodoId = await todoToDelete(todos.listTodos);
        if (selectedTodoId !== "0") {
          const ok = await confirMenu("¿Estas seguro?");
          if (ok) {
            await todos.deleteTodo(selectedTodoId);
            console.log("Tarea eliminada");
          }
        }
    }
    await inquirerPause();
    saveData(todos.listTodos);
  } while (opt !== "0");
};

main();
