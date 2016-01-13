angular.module('angularSpa')
    .service('mapService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/trabajo/crearTrabajo';
        this.registrar = function(datosUsuario){
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    });