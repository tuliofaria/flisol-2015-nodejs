
    // module with exports

    var cont = 0;

    module.exports = function(name){
        var cont2 = 0;
        console.log("Construtor ", cont++, cont2++);

        // metodo privado
        function writeSomething(){
            console.log("OPA: ", name, cont++, cont2++);
        }

        // interface publica
        return {
            escrever: writeSomething
        }
    }