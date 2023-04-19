var http = require('http')
var fs = require('fs')

http.createServer(server).listen(8800)
function server(request,response){
    fs.readFile('sample.html', function(error,data){
        response.writeHead({'Content-Type':'Text/html'})
        response.write(data)
        response.end()
    })
}