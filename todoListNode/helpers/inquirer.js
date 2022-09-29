const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      { value: "1", name: "1. Crear tarea" },
      { value: "2", name: "2. Listar tareas" },
      { value: "3", name: "2. Listar tareas completadas" },
      { value: "4", name: "2. Listar tareas pendientes" },
      { value: "5", name: "2. Listar tareas tarea(s)" },
      { value: "6", name: "2. Borrar tarea" },
      { value: "0", name: "0. Salir" },
    ],
  },
];

const inquirerMenu = async () => {
  console.log("===================".green);
  console.log("Selecciona una opcioón".green);
  console.log("=================== \n".green);

  const { opcion } = await inquirer.prompt(questions);
  return opcion;
};
const inquirerPause = async () => {
  const pauseInput = [
    { type: "input", name: "pause", message: "Presiona ENTER para continuar" },
  ];

  const pause = await inquirer.prompt(pauseInput);
  return pause;
};

const readInput = async (message) => {
  const readTodo = [
    {
      type: "input",
      name: "description",
      message: message,
      validate(value) {
        if (value.length === 0) {
          return "Ingresa una tarea";
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(readTodo);
  return description;
};
module.exports = { inquirerMenu, inquirerPause, readInput };
