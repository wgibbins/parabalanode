var sys = require("sys"),  
my_http = require("http");  
my_http.createServer(function(request,response){  
   console.log("I got kicked at " + request.url);  
	var parts = require('url').parse(request.url, true);
	console.log(JSON.stringify(parts.query.x));
	var x = Number(parts.query.x);
	var a = Number(parts.query.a);
	var b = Number(parts.query.b);
	var c = Number(parts.query.c);		
	var y = a * x * x + b * x + c;
	var result = [x, y];
    response.writeHeader(200, {"Content-Type": "application/json"});  
    response.write(JSON.stringify(result));  
    response.end();  
}).listen(8080);  
console.log("Server Running on 8080");   
