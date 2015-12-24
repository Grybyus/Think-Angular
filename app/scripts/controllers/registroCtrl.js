    angular.module('angularSpa')
    .controller('registroCtrl', function($scope, registroService){
        $scope.registrar = function (){
           
            usuarioEjemplo = {correo:"lucho@luchoo2sss2332www332221", 
            pass:"1234", nombreUsuario:"peipitoxx", 
            tipoUsuario:"TATUADOR"}
            
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