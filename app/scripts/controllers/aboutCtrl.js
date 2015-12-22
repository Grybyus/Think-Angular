(function(){
    angular.module('angularSpa')
    .controller('AboutCtrl', function($scope){
        $scope.items = [
          'Tatuajes',
          'Tatuadores',
          'Todo lo que necesitas saber'
        ];
    });
})();
