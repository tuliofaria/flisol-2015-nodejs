    
    var http = require('http');
    http.createServer(function (req, res) {
      console.log("Requested resource: ",req.url);
      res.end("Este é um serverzinho!");
    }).listen(3000);