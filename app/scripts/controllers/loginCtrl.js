    var app = angular.module('angularSpa')

    app.controller('loginCtrl', function($scope, loginService,$localStorage,$sessionStorage, $location){
    	$scope.$storage = $localStorage;
        $scope.user = [{
                nombre: '',
                password: ''
            }]
        
        $scope.login = function(){
            usuario = {correo:$scope.user.correo, pass:$scope.user.password}
            
            loginService.ingresar(usuario).success(function(data){
                console.log("EXITOOOOO!!!!")
                console.log(data)
                $localStorage.nombre = data["nombreUsuario"];
                $localStorage.id = data["idUsuario"];
                $localStorage.correo = data["correo"];
                $location.path('/home');
            }).error(function(error){
                console.log(error);
            });
        }
    });