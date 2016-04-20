var queryControllers = angular.module('queryControllers', []);

queryControllers.controller('TaskListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('tasks.json').success(function (data) {
            $scope.tasks = data;
        });
    }]);