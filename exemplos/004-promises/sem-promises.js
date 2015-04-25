    
    var fs = require('fs');
    var filename = "dados.txt";

    fs.readFile(filename, 'utf8', function(err, data){
        fs.writeFile("dados1.txt", data+"opa", function(err){
            fs.writeFile("dados2.txt", data+"opa 2", function(err){
                console.log("Terminou o processo!");
            })
        })
    });
