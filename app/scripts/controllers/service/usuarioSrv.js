angular.module('angularSpa')
    .factory("logService", function() {
        return {
            datos: {}
        };
    }).service('loginService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/login';
        this.ingresar = function(datosUsuario){
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    });
