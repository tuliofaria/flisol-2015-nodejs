    
    var q = require('q');
    var fs = require('fs');
    var filename = "dados.txt";

    function lerArquivo(filename){
        var defer = q.defer();
        fs.readFile(filename, 'utf8', function(err, data){
            // chamar proximo
            defer.resolve(data);
        });
        return defer.promise;
    }
    function escreverArquivo(data){
        var defer = q.defer();
        fs.writeFile("dados1.txt", data+"opa", function(err){
            // chamar proximo
            defer.resolve(data);
        });
        return defer.promise;
    }
    function escreverLog(data){
        var defer = q.defer();
        fs.writeFile("dados2.txt", data+"opa 2", function(err){
            //console.log("Terminou o processo!");
            defer.resolve();
        });
        return defer.promise;
    }

    lerArquivo(filename)
        .then(escreverArquivo)
        .then(escreverLog)
        .then(function(){
            console.log("Terminou o processo!");
        });

