(function(){
    angular.module('angularSpa')
	.controller('MainCtrl', function($scope, logService){
        console.log("PERFIL MAIN CTRL");
        console.log(logService.datos)
		$scope.items = [
			logService.datos["nombre"],
	        logService.datos["id"],
	      	logService.datos["mail"],

	    ];
	});
})();
