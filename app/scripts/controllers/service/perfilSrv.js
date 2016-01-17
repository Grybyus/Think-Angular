angular.module('angularSpa')
    .service('perfilService', function($http){
        var urlBase = 'http://localhost:8080/Think-INK/rest/verPerfil';
        var urlGaleria = 'http://localhost:8080/Think-INK/verGaleria';
		var urlMap = 'http://localhost:8080/Think-INK/trabajo/obtenerTrabajo';
        this.cargarGaleria = function(datosUsuario){
            return $http({
                    url: urlGaleria,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
        this.cargarPerfil = function(datosUsuario){
            return $http({
                    url: urlBase,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
		this.leerMark = function(datosUsuario){
            return $http({
                    url: urlMap,
                    method: "POST",
                    data: JSON.stringify(datosUsuario),
                    headers: {'Content-Type': 'application/json'}
                });
        }
    });
