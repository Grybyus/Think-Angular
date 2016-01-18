angular.module('angularSpa')
  .controller('perfilCtrl',function ($scope,logService,perfilService, galeriaService,$localStorage,$sessionStorage,NgMap,Upload) {
      console.log("PERFIL MAIN CTRL");
      $scope.tab_url = 'views/main.html';
      console.log(perfilService.cargarGaleria);
        console.log($localStorage)
		$scope.items = {
            name:$localStorage.nombre,
            id:$localStorage.id,
            mail:$localStorage.correo
        };
	
	$scope.marcador = [];
    datos = {idUsuario:$localStorage.id}
    
    perfilService.leerMark(datos)
          .success(function(data){
            //Respuesta del servidor
            console.log(data);
            console.log(data["latitud"]);
            console.log(data["longitud"]);
            console.log({lat: data["latitud"], lng: data["longitud"]});
            $scope.marcador[0] = {lat: data["latitud"], lng: data["longitud"]};
            $scope.nombreLocal = data["nombreLocal"];
            console.log(data["nombreLocal"])
          })
          .error(function(error){
            console.log(error);
          });
	
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
	
	//Arreglo de marcadores, que se mantendra con largo 1
   $scope.marcadores = [{lat:-33.4463731,lng:-70.6871091}];
   //Una vez inicializado el mapa de editar se guarda en el scope
    $scope.$on('mapInitialized', function(event, map) {
        if(map.id == 'editar'){
            $scope.map = map;
        }else{
            $scope.map = null;
        }
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
            datos = {nombreLocal:$scope.map.nom,latitud: ""+marcador["lat"],
                 longitud: ""+marcador["lng"], idUsuario:$localStorage.id}
                 
            perfilService.registrar(datos).success(function(data){
                console.log("EXITOOOOO!!!!")
                console.log(data)
                $scope.tab_url = 'views/mapUs.html'
                datos = {idUsuario:$localStorage.id}
    
                perfilService.leerMark(datos)
                    .success(function(data){
                        //Respuesta del servidor
                        console.log(data);
                        console.log(data["latitud"]);
                        console.log(data["longitud"]);
                        console.log({lat: data["latitud"], lng: data["longitud"]});
                        $scope.marcador[0] = {lat: data["latitud"], lng: data["longitud"]};
                        
                        $scope.nombreLocal = data["nombreLocal"];
                        console.log(data["nombreLocal"])
                    })
                    .error(function(error){
                        console.log(error);
                    });
            }).error(function(error){
                console.log(error);
            });
    }
	//Me gusta
    var idUsuario = {'idUsuario':$localStorage.id};
	$scope.darlike=function(idFoto){
        user = {idUsuario:$localStorage.id, idFoto:idFoto}
	   galeriaService.darLike(user)
					.success(function(data){
						//Respuesta del servidor
						console.log(data);
					})
					.error(function(error){
						console.log(error);
					});
	};
    
	//Subir imagen controler
            $scope.model = {};
            $scope.selectedFile = [];
            $scope.uploadProgress = 0;
            
            $scope.setFile = function(element) {
                $scope.currentFile = element.files[0];
                var reader = new FileReader();

                reader.onload = function(event) {
                    $scope.image_source = event.target.result
                    $scope.$apply()
                    }
                reader.readAsDataURL(element.files[0]);
            }

            $scope.uploadFile = function () {
                var file = $scope.currentFile;
                console.log("FILE"+file);
                $scope.upload = Upload.upload({
                    url: 'http://localhost:8080/Think-INK/rest/fileupload',
                    method: 'POST',
                    data: {'idUsuario':$localStorage.id},
                    file: file
                }).progress(function (evt) {
                    $scope.uploadProgress = parseInt(100.0 * evt.loaded / evt.total, 10);
                }).success(function (data) {
                    
                    console.log("respuesta: "+JSON.stringify(data, null, 4));
                    var idUsuario = {'idUsuario':$localStorage.id};
                    var tipo = "SUBIDA";
                    usuario = {idUsuario:idUsuario,tipo:tipo}
                    
                    $scope.tab_url = 'views/galeria.html'
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
                    
                    //do something
                });
            };
  })
  
  .directive('progressBar',
        function() {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch(attrs.progressBar, function (newValue) {
                        el.css('width', newValue.toString() + '%');
                    });
                }
            };
        });