require("colors");

const mostrarMenu = () => {
  console.clear();
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    console.clear();
    console.log("=====================".green);
    console.log("Selecione una opción".green);
    console.log("=====================".green);
    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"7.".green} Salir \n`);

    readline.question("Seleccione una opción:", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readline.question("Preciona ENTER para continuar", (opt) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = { mostrarMenu, pausa };
