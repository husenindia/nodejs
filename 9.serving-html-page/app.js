var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead('200',{'Content-Type':'text/html'});
    var myReadStreams = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStreams.pipe(res);
})

server.listen(3000,'127.0.0.1');
console.log('Listening to server 127.0.0.1 Port Number 3000'); 