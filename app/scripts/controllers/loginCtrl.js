    var app = angular.module('angularSpa')

    app.controller('loginCtrl', function($scope, logService){
    	$scope.user = [{
                nombre: '',
                password: ''
            }]

        $scope.newdata = function(){
            logService.datos.nombre = $scope.user.nombre;
            logService.datos.pass = $scope.user.password;     
            logService.datos.mail = "TuCorreo@correo.cl";
            logService.datos.id = 1;
            
			console.log("Nombre" + $scope.user.nombre);
			console.log("Pass" + $scope.user.password);

        }
    });