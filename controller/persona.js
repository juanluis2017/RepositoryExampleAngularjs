angular.module("MyFirstModule", []).
    controller('FirstController', ['$scope', '$http', function ($scope, $http) {


        $scope.posts = [];
        $scope.newpost={};
        $scope.nombre = "juan luis";
        $scope.apellido = "perez"
        $scope.nuevocomentario = {};
        $scope.comentarios = [
            {
                usuario: "juan luis",
                curso: "matematicas"
            }, {
                usuario: "pedro luis",
                curso: "historia"
            }
        ];


        $scope.addPost =function()
        {
            $http({
                method: 'POST',
                data: { title: $scope.newpost.title ,body:$scope.newpost.body,userId:'1'},
                url: 'https://jsonplaceholder.typicode.com/posts'
            }).then(function successCallback(response) {

                console.log(response);
            }, function errorCallback(response) {
                console.log(response);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(function successCallback(response) {

            alert(response.data);
            console.log(response);
            $scope.posts = response.data;
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

        //$http.get("https://jsonplaceholder.typicode.com/posts").success(function(data) { console.log(data); }).error(function (err) { });

        $scope.enviarComentario = function () {
            $scope.comentarios.push($scope.nuevocomentario);
            $scope.nuevocomentario = {};
            // alert("hello world angular js");
        };

        $scope.alerta = function ($scope) {

            alert("hello world angular js" + $scope.nombre);
        };



    }]);

