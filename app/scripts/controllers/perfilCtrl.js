angular.module('angularSpa')
  .controller('perfilCtrl'), 
	function ($scope, cargarPerfil) {
      var idUsuario = {'idUsuario':5};
	  perfilService.cargarPerfil(idUsuario)
					.success(function(data){
						//Respuesta del servidor
						console.log(data);
						console.log("mail "+data["correo"]);
						console.log("us "+data["nombreUsuario"]);

					})
					.error(function(error){
						console.log(error);
					});
	 
  });