    angular.module('angularSpa')
    .controller('loginCtrl', function($scope, loginService){
    	$scope.user = [{
                nombre: '',
                password: ''
            }]
        function enviaLog(id){
            loginService.enviaLog(id)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }

        $scope.newdata = function(){
			console.log("Nombre" + $scope.user.nombre);
			console.log("Pass" + $scope.user.password);
        }
    });