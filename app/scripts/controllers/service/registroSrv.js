angular.module('angularSpa')
    .service('registroService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/registro';
        this.registrar = function(datosUsuario){
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    });
