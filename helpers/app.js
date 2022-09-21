/* 
require("colors");
const argv = require("../config/yargs");
const { crearArchivo } = require("./multiplicar");

console.clear();

crearArchivo(argv.b, argv.list, argv.limit)
  .then((e) => console.log("=========".green, e.red, "==========".green))
  .catch((e) => console.log(e));
 */
let arr = [
  { name: "David", edad: 8 },
  { name: "Luis", edad: 9 },
  { name: "Juan", edad: 10 },
  { name: "Diego", edad: 11 },
];

const ejercicio2 = () => {};

function ejercicio1() {
  let mayores = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].edad > 9) {
      mayores.push(arr[i]);
    }
  }
  let nombres = [];
  for (var i = 0; i < mayores.length; i++) {
    nombres.push(mayores[i].name);
  }

  return nombres;
}
console.log(ejercicio1());
