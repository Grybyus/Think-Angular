(function(){
    angular.module('angularSpa')
	.controller('MainCtrl', function($scope, logService){
		$scope.items = [
			logService.datos.nombre,
	        logService.datos.id,
	      	logService.datos.mail,

	    ];
	});
})();
