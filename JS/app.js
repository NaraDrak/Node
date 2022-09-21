import { crearArchivo } from "../helpers/multiplicar.js";
/* crearArchivo(10)
  .then((nombreArchivo) => {
    console.log("Name", nombreArchivo);
  })
  .catch((err) => console.log(err));
 */

/* console.log(process.argv);
 */

/* const a = [1, 2, 5];
const b = [3, 2, 3];

function compareTriplets(a, b) {
  let points = [0, 0];
  for (let i = 0; i <= a.length; i++) {
    if (a[i] > b[i]) {
      console.log("alice gana");
      points[0] = points[0] + 1;
    } else if (b[i] > a[i]) {
      console.log("bob gana");
      points[1] = points[1] + 1;
    } else {
      console.log("empate");
    }
  }
  return points;
}

compareTriplets(a, b);
 */

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  const suma = ar.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  return suma;
}

console.log(aVeryBigSum(ar));
