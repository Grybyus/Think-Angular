angular.module('angularSpa')
.controller('MapCtrl', function($scope, logService,$localStorage,$sessionStorage,NgMap,mapService){
    //Arreglo de marcadores, que se mantendra con largo 1
   $scope.marcadores = [{lat:-33.4463731,lng:-70.6871091}];
   //Una vez inicializado el mapa se guarda en el scope
   NgMap.getMap().then(function(map) {
      $scope.map = map;
    });
    // Funcion on-Click
   $scope.setMarcador = function(e){
        //Reemplazar marcador
        $scope.marcadores[0] = ({lat:e.latLng.lat(), lng: e.latLng.lng()});
        //centrar en la posicion del click
        $scope.map.panTo(e.latLng);
        console.log("AGREGAR EN ");
        console.log($scope.marcadores[0])
    }

    $scope.registraMap = function (){
            var marcador = $scope.marcadores[0];

            console.log("Consultando"+JSON.stringify($localStorage.id));
            datos = {nombreLocal:"local de prueba",latitud: ""+marcador["lat"],
                 longitud: ""+marcador["lng"], idUsuario:$localStorage.id}
                 
            mapService.registrar(datos).success(function(data){
                console.log("EXITOOOOO!!!!")
                console.log(data)
            }).error(function(error){
                console.log(error);
            });
    }
});