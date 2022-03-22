//Building a server without express, ie using the core module/http server

const http = require("http");

const hostname = "localhost";

const port = 8080;

const server = http.createServer((req, res) => {

    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>Hellow World, this the server created using the core node modules. In this kinds of modules, the server acts like the mongo Driver and uses the http verb(get,put, post and delete to create and actual server. The express is build ontop of this modules.</h1></body></html>")
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})
