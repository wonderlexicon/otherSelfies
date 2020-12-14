let express = require('express');
let app = express();
let path = require ("path");


app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'));
})

// app.use("/", express.static("."));

let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT ||5000;
server.listen(port,() =>{
    console.log("server listening");
});


app.use("/", express.static("."));


let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT ||5000;
server.listen(port,() =>{
    console.log("server listening");
});

global.window = require('jsdom').jsdom().defaultView;
var aframe = require('aframe/src');
console.log(aframe.version);