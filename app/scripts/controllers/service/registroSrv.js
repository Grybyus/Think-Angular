angular.module('angularSpa')
    .service('registroService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/registro';
        this.registrar = function(datosUsuario){
            console.log("Enviando hadouh aqiulf aofaigjhadklgalhdlkdkfaj 13324224");
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    });
