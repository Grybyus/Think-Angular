angular.module('angularSpa')
.controller('MapUsCtrl', function($scope, logService,$localStorage,$sessionStorage,NgMap,mapUsService){
    datos = {idUsuario:$localStorage.id}
    mapUsService.leerMark(datos)
          .success(function(data){
            //Respuesta del servidor
            console.log(data);
            console.log("galeria"+data["idGaleria"]);
            $scope.marcador[0] = data; //comoes la BD? : {lat: ,lng:}
          })
          .error(function(error){
            console.log(error);
          });
});