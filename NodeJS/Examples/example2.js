//Simple Server Example

//Loads the http module and stores it inside the http
var http = require('http');


//Creates a server and listens on the port 8000.
//Whenever an user will try to connect to the server, function(request, response) will run.
//The parameter request will hold the request of the user.
//The parameter response is the response sent by the server.
http.createServer(function(request, response){

  console.log("A request has been made");
  console.log("The request is " + request.url);
  //Response sends a response back whenever a request is made.
  //The response that is being sent is a plain text.
  response.writeHead(200, {"Context-Type" : "text/plain"});

  response.write("Hello World!");

  //This tells the server that all responses have been sent and that this message is done.
  response.end();
}).listen(8000);
console.log("Server is running");

