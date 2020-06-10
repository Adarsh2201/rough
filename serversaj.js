var http= require('http');
var fs =  require('fs');




// manual method of writing
// myReadStream.on('data',function (chunks) {
//     console.log('new chunk recieved:');
//     myWriteStream.write(chunks);
//     });







var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plane'});
    // res.end('hey world of servers');
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
    
    //piping method
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('we are listening to port 3000'); 
