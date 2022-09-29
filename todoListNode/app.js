require("colors");
const {
  inquirerPause,
  inquirerMenu,
  readInput,
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
        todos.AllTodos();
        break;
      case "3":
        todos.ListCompltedTodos(true);
        break;
      case "4":
        todos.ListCompltedTodos(false);
        break;
    }
    saveData(todos.listTodos);
  } while (opt !== "0");
};

main();
