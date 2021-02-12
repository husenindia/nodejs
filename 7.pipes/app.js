var fs = require('fs');
var http = require('http');


var myReadStreams = fs.createReadStream(__dirname + '/readme.txt','utf8');
var myWriteStrems = fs.createWriteStream(__dirname + '/writeme.txt');


myReadStreams.pipe(myWriteStrems);


// var server = http.createServer(function(req,res){
//     res.writeHead('200',{'Content-Type':'text/plain'});
//     res.end('Server created successfully');
// })


// server.listen(3000,'127.0.0.1');
// console.log('Listening to server 127.0.0.1 Port Number 3000'); 
