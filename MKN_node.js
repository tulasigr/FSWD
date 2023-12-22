// import the http module
// on request of cafe.html.... respond back with cafe.html 

var http = require('http');
var fs = require('fs');

console.log(__dirname);
function onRequest(req,res)
{
    if(req.url=='/MKN_assignment1.html' || req.url=='/')
    {
        fs.readFile('./MKN_assignment1.html', function(error,data) 
    {
        if(error)
        {
            res.writeHead(404);
            res.write('File Not Found');
        }
        else
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
    }
    else if (req.url == '/MKN_assignment1.css') 
    {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('./MKN_assignment1.css'));
        res.end();
    }
    else 
    {
    res.write("invalid request")
    res.end();
    }

}

http.createServer(onRequest).listen(4000);
console.log("Server created");
