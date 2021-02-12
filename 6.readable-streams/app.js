var fs = require('fs');

var myReadStreams = fs.createReadStream(__dirname + '/readme.txt','utf8');
var myWriteStrems = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStreams.on('data',function(chunk){
    myWriteStrems.write(chunk);
})
