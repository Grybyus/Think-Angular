angular.module('angularSpa')
  .controller('perfilCtrl'), 
	function ($scope, cargarPerfil,$localStorage,$sessionStorage,$localStorage,$sessionStorage) {
      var idUsuario = {'idUsuario':$localStorage.id};
	  perfilService.cargarPerfil(idUsuario)
					.success(function(data){
						//Respuesta del servidor
						console.log(data);
						console.log("mail "+data["correo"]);
						console.log("us "+data["nombreUsuario"]);
		                $localStorage.nombre = data["nombreUsuario"];
		                $localStorage.id = data["idUsuario"];
		                $localStorage.correo = data["correo"];
		                $location.path('/home');

					})
					.error(function(error){
						console.log(error);
					});
	 
  });