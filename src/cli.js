const Gitwitch = require("./gitwitch");
const gitwitch = new Gitwitch({
  parser: {parse() {}},
  runner: {run() {}},
  formatter: {format() {}}
});

gitwitch.process(process.argv.slice(2).join(" "));

//running this file node ./src/cli.js lsdjfklsdjf
