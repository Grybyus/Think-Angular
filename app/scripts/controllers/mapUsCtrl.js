angular.module('angularSpa')
.controller('MapUsCtrl', function($scope, logService,$localStorage,$sessionStorage,NgMap,mapUsService){
    $scope.marcador = [];
    datos = {idUsuario:$localStorage.id}
    
    mapUsService.leerMark(datos)
          .success(function(data){
            //Respuesta del servidor
            console.log(data);
            console.log(data["latitud"]);
            console.log(data["longitud"]);
            console.log({lat: data["latitud"], lng: data["longitud"]});
            $scope.marcador[0] = {lat: data["latitud"], lng: data["longitud"]};
            
            console.log(data["nombreLocal"])
          })
          .error(function(error){
            console.log(error);
          });
});