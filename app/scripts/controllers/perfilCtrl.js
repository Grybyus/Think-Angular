angular.module('angularSpa')
  .controller('perfilCtrl', 
	function ($scope,perfilService,$localStorage,$sessionStorage) {
      console.log("PERFIL MAIN CTRL");
      console.log(perfilService.cargarGaleria);
        console.log($localStorage)
		$scope.items = [
            $localStorage.nombre,
            $localStorage.id,
            $localStorage.correo
	    ];
        /**Colocamos los datos del usuario para obtener la id de la galeria */
    var idUsuario = {'idUsuario':$localStorage.id};
	var tipo = "SUBIDA";
	usuario = {idUsuario:idUsuario,tipo:tipo}
	
	/**Cargamos la idGaleria */
	perfilService.cargarGaleria(usuario)
					.success(function(data){
						//Respuesta del servidor
						console.log(data);
						console.log("galeria"+data["idGaleria"]);
                        $scope.fotos = data;
					})
					.error(function(error){
						console.log("error ",error);
					});
	/**Ahora que tenemos la idGaleria creamos un arreglo con las fotos de la galeria */
    var pictures =$scope.pictures=[];
	
	/**Funcion para agregar las fotos */
	$scope.addPics = function(i){
		pictures.push({
			/**Aqui pedimos los datos de las imagenes y sus referencia */	
		})
	}
	/**Ciclo para agregar las fotos, en este caso sera agregar todas*/
	var lenGaleria = pictures.length; 
	for(var i=0;i<lenGaleria;i++){
		$scope.addPics(i);
	}
	console.log(pictures)
  });