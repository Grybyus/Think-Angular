    angular.module('angularSpa')
    .controller('uploadCtrl', [
        '$scope',
        'Upload', 
        function ($scope, Upload,$localStorage,$sessionStorage) {
            $scope.model = {};
            $scope.selectedFile = [];
            $scope.uploadProgress = 0;
            
            $scope.setFile = function(element) {
                $scope.currentFile = element.files[0];
                var reader = new FileReader();

                reader.onload = function(event) {
                    $scope.image_source = event.target.result
                    $scope.$apply()
                    }
                reader.readAsDataURL(element.files[0]);
            }

            $scope.uploadFile = function () {
                var file = $scope.currentFile;
                console.log("FILE"+file);
                $scope.upload = Upload.upload({
                    url: 'http://localhost:8080/Think-INK/rest/fileupload',
                    method: 'POST',
                    data: {'idUsuario':$localStorage.id},
                    file: file
                }).progress(function (evt) {
                    $scope.uploadProgress = parseInt(100.0 * evt.loaded / evt.total, 10);
                }).success(function (data) {
                    
                    console.log("respuesta: "+JSON.stringify(data, null, 4));
                    //do something
                });
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
    