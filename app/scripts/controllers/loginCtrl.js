    angular.module('angularSpa')
    .controller('loginCtrl', function($scope, loginService){
    	$scope.user = [{
                nombre: '',
                password: ''
            }]

        $scope.newdata = function(){
			console.log("Nombre" + $scope.user.nombre);
			console.log("Pass" + $scope.user.password);
        }
    });