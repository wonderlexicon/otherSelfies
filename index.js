app.use("/", express.static("."));

var foo = document.getElementById('foo').components.multisrc
foo.granularChange(0).color = {r:0,g:1,b:0}

let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT ||5000;
server.listen(port,() =>{
    console.log("server listening");
});