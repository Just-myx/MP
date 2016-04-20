angular
    .module('app')
    .controller('vendorsCtrl', ['$scope', 'Friends', function($scope, Friends) {
        $scope.title = "Vendors";
        Friends.get().then(function(data) {
            $scope.items = data;
        });
    }]);