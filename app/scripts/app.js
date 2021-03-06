(function(){

    angular.module('angularSpa', [
    'ngRoute','ngFileUpload','ngStorage','ngMap'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/perfil.html',
            controller: 'perfilCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/actors/:id', {
            templateUrl: 'views/showActor.html',
            controller: 'showActorCtrl'
        })
        .when('/galeria', {
            templateUrl: 'views/galeria.html',
            controller: 'galeriaCtrl'
          })  
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
          })  
        .when('/registro', {
            templateUrl: 'views/registro.html',
            controller: 'registroCtrl'
          })  
        .when('/perfil', {
            templateUrl: 'views/perfil.html',
            controller: 'perfilCtrl'
          })
        .when('/upload', {
            templateUrl: 'views/upload.html',
            controller: 'uploadCtrl'
          })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'MapCtrl'
          })
        .when('/mapUs', {
            templateUrl: 'views/mapUs.html',
            controller: 'MapUsCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    }).run(["$rootScope", "$location", 
         function ($rootScope, $location) {

            }] );

})();
