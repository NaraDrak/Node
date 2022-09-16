let arr = [
  { id: 1, age: 12, name: "Manu" },
  { id: 2, age: 24, name: "Quincy" },
  { id: 3, age: 22, name: "Abbey" },
];

let totalAge = arr.reduce((acc, currentObj) => acc + currentObj.age, 0);
console.log(totalAge);
