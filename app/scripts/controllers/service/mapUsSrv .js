angular.module('angularSpa')
    .service('mapUsService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/gettrabajo?';
        this.leerMark = function(datosUsuario){
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    });