const request = require("request");
let argv = require("yargs").argv;
let title = argv.c || "mission";

let url = `https://www.omdbapi.com/?apikey=1ef442d5&t=${title}`;


request(url,function(err,response,body){
	if(err) {
		console.log("Error");
	} else {
		let movie = JSON.parse(body);
		//let message = `The movie is ${body.Language} and released year is `;
		console.log(movie);
		//console.log(message);
	}
})