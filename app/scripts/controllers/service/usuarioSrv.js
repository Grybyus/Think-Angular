angular.module('angularSpa')
    .service('loginService', function($http){
        var urlBaseE = 'http://localhost:8080/sakila-backend-master/actors/';
        this.enviaLog = function(id){
                    return $http.get(urlBaseE.concat(id));}
    });