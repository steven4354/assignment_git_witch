class QuestionParser {
  constructor(){}

  parse(question){
    let object = {}
    //our code
    let arr = question.split(" ") //what repos does griselda have?
    let idx = arr.indexOf("does");
    object.username = arr[idx+1];
    idx = arr.indexOf("what");
    let idx2 = arr.indexOf('repos');
    object.subject = arr.slice((idx+1), idx2+1).join(" ");
    let query = {"what": "details", "how": "count"};
    object.query = query[arr[0]];
    return object
  }
}

module.exports = QuestionParser