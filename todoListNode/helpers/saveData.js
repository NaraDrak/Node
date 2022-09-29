const fs = require("fs");
const file = "./db/data.json";
const saveData = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};
const readDB = () => {
  if (!fs.existsSync(file)) {
    return null;
  }
  const info = fs.readFileSync(file, { encoding: "utf-8" });
  if (info) {
    return JSON.parse(info);
  } else {
    return [];
  }
};
module.exports = { saveData, readDB };
