angular.module('angularSpa')
    .service('galeriaService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/verGaleria';
        var urlBaseLike = 'http://localhost:8080/Think-INK/megusta/guardar';
        this.cargarGaleria = function(datosUsuario){
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
        this.darLike = function(datosUsuario){
            return $http({
                    url: urlBaseLike,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    })
    ;
