const Questionparser = require('./questionparser');
const questionparser = new Questionparser()
const Commandrunner = require('./commandrunner');
const commandrunner = new Commandrunner();
const Responseformatter = require('./responseformatter');
const responseformatter = new Responseformatter();


class GitWitch {
  constructor(object) {
    this.parser = object.parser;
    this.runner = object.runner;
    this.formatter = object.formatter;
  }

  process(input) {
    //return new Promise((resolve, reject) => {
     
      //console.log(input);
      //resolve(input);
    

    questionparser.parse(input).then(output => commandrunner.responsify(output)).then(output => responseformatter.formatify(output)).then(output => output).catch(err => {console.log(err)})

  }
  
  run(input) { //input will be the cli string


  }

}

module.exports = GitWitch;
