var http = require('http');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    if(input !== null) {
        process.stdout.write(input);

        var command = input.trim();
        if(command == 'exit') {
            process.exit();
        }
    }
});

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!');
}).listen(5001);

console.log('Server running at port 5001');
