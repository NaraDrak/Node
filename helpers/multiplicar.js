const fs = require("fs");

let salida = "";
const crearArchivo = (base, list, limit) => {
  for (let i = 1; i <= limit; i++) {
    salida += `${i * base}\n`;
  }
  const tablaMultiplicar = new Promise((resolve, reject) => {
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
    });

    salida
      ? resolve(list ? `tabla-${base}.txt` : "")
      : reject("Ocurrió un error al crear el archivo");
  });

  return tablaMultiplicar;
};

module.exports = {
  crearArchivo,
};
