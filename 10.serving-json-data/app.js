var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead('200',{'Content-Type':'application/json'});
    var myObj = {
        name:'Husen Telwala',
        occupation:'Front-end Developer',
        age:30
    }
    res.end(JSON.stringify(myObj));
})

server.listen(3000,'127.0.0.1');
console.log('Listening to server 127.0.0.1 Port Number 3000'); 
