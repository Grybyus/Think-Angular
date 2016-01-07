angular.module('angularSpa')
    .service('perfilService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/rest/verPerfil';
        this.cargarPerfil = function(datosUsuario){
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    });
