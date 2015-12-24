    angular.module('angularSpa')
    .controller('uploadCtrl', [
        '$scope',
        'Upload',
        function ($scope, Upload) {
            $scope.model = {};
            $scope.selectedFile = [];
            $scope.uploadProgress = 0;

            $scope.uploadFile = function () {
                var file = $scope.selectedFile[0];
                $scope.upload = Upload.upload({
                    url: 'http://localhost:8080/Think-INK/rest/fileupload',
                    method: 'POST',
                    data: {'idUsuario':2},
                    file: file
                }).progress(function (evt) {
                    $scope.uploadProgress = parseInt(100.0 * evt.loaded / evt.total, 10);
                }).success(function (data) {
                    
                    console.log("respuesta: "+JSON.stringify(data, null, 4));
                    //do something
                });
            };

            $scope.onFileSelect = function ($files) {
                $scope.uploadProgress = 0;
                $scope.selectedFile = $files;
            };
        }
    ])
    .directive('progressBar', [
        function () {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch(attrs.progressBar, function (newValue) {
                        el.css('width', newValue.toString() + '%');
                    });
                }
            };
        }
    ]);
    