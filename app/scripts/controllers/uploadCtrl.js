    angular.module('angularSpa')
    .controller('uploadCtrl', ['$scope', 'upload', function ($scope, upload) 
{
	$scope.uploadFile = function()
	{
		var name = $scope.name;
		var file = $scope.file;
		
		upload.uploadFile(file, name).then(function(res)
		{
			console.log(res);
		})
	}
}])

.directive('uploaderModel', ["$parse", function ($parse) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) 
		{
			iElement.on("change", function(e)
			{
				$parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
			});
		}
	};
}])

.service('upload', ["$http", "$q", function ($http, $q) 
{
	this.uploadFile = function(file, name)
	{
		var deferred = $q.defer();
		var formData = new FormData();
		formData.append("name", name);
		formData.append("file", file);
		return $http.post("server.php", formData, {
			headers: {
				"Content-type": undefined
			},
			transformRequest: angular.identity
		})
		.success(function(res)
		{
			deferred.resolve(res);
		})
		.error(function(msg, code)
		{
			deferred.reject(msg);
		})
		return deferred.promise;
	}	
}])

var myApp = angular.module('myApp', ['ngResource']);
myApp.config(['$httpProvider', function($httpProvider) {
 
  $httpProvider.defaults.transformRequest = function(data) {
    if(undefined === data) return data;
    var formData = new FormData();
    angular.forEach(data, function(value, key) {
      if(value instanceof FileList) {
        if(value.length === 1)
          formData.append(key, value[0]);
        else {
          angular.foreach(value, function(file, index) {
            formData.append(key + '_' + index, file);
          });
        }
      } else {
        formData.append(key, value);
      }
    });
    return formData;
  };
  $httpProvider.defaults.headers.post['Content-Type'] = undefined;
 
}]);