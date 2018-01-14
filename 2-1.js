var net = require('net');

var chatServer = net.createServer();
chatServer.on('connection', function(client) {
    client.write('Hi!');
    client.on('data', function(data){
     
            console.log(data);
        
        
    });
}).listen(9000);