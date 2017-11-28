let mockGithubObject = [
  {
    repos: [
      {
        name: "repo1name",
        description: "cool project"
      },
      {
        name: "repo2name",
        description: "cooler project"
      },
      {
        name: "repo3name",
        description: "coolest project"
      }
    ],

    starredrepos: [
      {
        name: "repo3name",
        description: "coolest project"
      }
    ],

    name: "griselda"
  },

  {
    repos: [
      {
        name: "repo1name",
        description: "awesome project"
      },
      {
        name: "repo2name",
        description: "awesomer project"
      },
      {
        name: "repo3name",
        description: "awesomest project"
      }
    ],

    starredrepos: [
      {
        name: "repo3name",
        description: "awesomest project"
      }
    ],

    name: "brunhilde55"
  }
];

class CommandRunner {
  constructor() {}

  responsify(input) { //input is an object from questionparser.parser {username: , subject: }
  
  	return new Promise((resolve,reject)=> {
    
  		  let response = {};

    //adding old keys to response
    response.username = input.username;
    response.subject = input.subject;
    response.query = input.query;

    //finding the results => first get the right object from mockGithubObject
    let rightObj = mockGithubObject.filter(
      obj => obj.name === response.username
    );

    //then get the starredrepos or repo from mockGithubObject
    let subject = response.subject.split(" ").join("");
    let rightItem = rightObj[subject];

    let queries = {
      count: rightItem.length,
      details: rightItem
    };

    response.results = queries[response.query];

    return resolve(response);




  	})

    
  }
}

module.exports = CommandRunner;
