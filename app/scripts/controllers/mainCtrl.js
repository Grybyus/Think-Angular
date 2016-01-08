(function(){
    angular.module('angularSpa')
	.controller('MainCtrl', function($scope, logService,$localStorage,$sessionStorage){
        console.log("PERFIL MAIN CTRL");
        console.log($localStorage)
		$scope.items = [
            $localStorage.nombre,
            $localStorage.id,
            $localStorage.correo
	    ];
	});
})();
