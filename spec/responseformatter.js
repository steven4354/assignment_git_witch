class ResponseFormatter {
  constructor() {}

  //takes the return item from commandrunner.js
  formatify(input){
  return new Promise((resolve,reject)=>{
	if (typeof input.results == "number" && input.subject == "repos") {
  		return resolve(`${input.username} has ${input.results} public ${input.subject}`)
  	} else if (typeof input.results == "number" && input.subject == "starred repos") {
  		return resolve (`${input.username} has ${input.results} ${input.subject}`)
	} else if (Array.isArray(input.results) && input.subject == "starred repos") {
		return resolve (`${input.username}'s ${input.subject} ${input.results.map(object=> { 
  			return (object.name + " - " + object.description)}).join(" ")}`)
	}
		else {
  		return resolve(`${input.username}'s public ${input.subject} ${input.results.map(object=> { 
  			return (object.name + " - " + object.description)}).join(" ")}`)
}





  })
  
  	

  }
}


/* should return

griselde's public repos
Code-Coven - A version control system for weird sisters
Eye-Of-Newt - EON is a new frontend framework written in pure spaghetti code.

griselde has 2 public repos

*/


module.exports = ResponseFormatter;