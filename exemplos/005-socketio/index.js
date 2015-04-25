    
    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
         res.redirect("index.html");
    });

    app.use(express.static('public'));

    var server = app.listen(3000, function () {
      console.log('Example app listening at 3000');
    });

    var io = require('socket.io')(server);

    io.on('connect', function(socket){
        var enviar = function(){
            socket.emit('message', new Date());
            setTimeout(enviar, Math.random()*5000);
        };
        enviar();
    });