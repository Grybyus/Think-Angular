angular.module('angularSpa')
    .service('galeriaService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/verGaleria';
        this.cargarGaleria = function(datosUsuario){
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    });
