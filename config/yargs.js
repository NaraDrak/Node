const argv = require("yargs")
  .options(
    "b",
    {
      alias: "base",
      type: "number",
      demandOption: true,
    },
    "lis",
    {
      alias: "list",
      type: "boolean",
      demandOption: false,
      default: false,
    },
    "lim",
    {
      alias: "limit",
      type: "number",
      demandOption: false,
    }
  )
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
