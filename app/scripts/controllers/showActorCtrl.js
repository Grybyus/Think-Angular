    angular.module('angularSpa')
    .controller('showActorCtrl', function($scope,$routeParams ,actorsService){
        $scope.actors =[];
        $scope.actor = $routeParams.id;
            
        function getActor(id){
            actorsService.getActor(id)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }

        console.log("Parametros"+$routeParams.id);
        getActor($scope.actor);
        
    });