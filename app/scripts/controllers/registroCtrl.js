    angular.module('angularSpa')
    .controller('registroCtrl', function($scope, registroService, logService){
        $scope.registrar = function (){

            if($scope.user.tatuador){
                tatuador = "TATUADOR";
            }else{
                tatuador = "USUARIO";
            }

            usuario = {correo:$scope.user.correo, 
            pass:$scope.user.password, nombreUsuario:$scope.user.username, 
            tipoUsuario:tatuador}

            console.log("Consultando"+JSON.stringify(usuario));
            
            registroService.registrar(usuario)
                .success(function(data){
                    //Respuesta del servidor
                    logService.datos.id = data["idUsuario"];
                    logService.datos.nombre = data["nombreUsuario"];
                    logService.datos.mail = data["correo"];

                    console.log(data);
                    console.log("mail "+data["correo"]);
                    console.log("id "+data["idUsuario"]);
                    console.log("us "+data["nombreUsuario"]);

                })
                .error(function(error){
                    console.log(error);
                });
        }
        
    });