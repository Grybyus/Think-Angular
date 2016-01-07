(function(){

    angular.module('angularSpa', [
    'ngRoute','ngFileUpload'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
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
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
