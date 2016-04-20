angular
    .module('app', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('tasks', {
                url: '/tasks',
                templateUrl: 'tasks.html'
                //controller: 'tasksCtrl'
            })
            .state('vendors', {
                url: '/vendors',
                templateUrl: 'vendors.html'
                //controller: 'vendorsCtrl'
            })
            .state('clients', {
                url: '/clients',
                templateUrl: 'clients.html'
            })
            .state('example', {
                url: '/example',
                templateUrl: 'example.html'
            })

    }])
    .controller('ModalDemoCtrl', function ($scope, $rootScope, $uibModal) {
        $rootScope.allTasks = [{
            who: 'Petrov',
            when: '2016-04-14',
            whome: 'Ivanov Ivan',
            why: 'have a problem',
            result: 'i am fine',
            rate: '8',
            comment: 'all right'
        }];

        $rootScope.newTask = {
            who: '',
            when: '',
            whome: '',
            why: '',
            result: '',
            rate: '',
            comment: ''
        };
        alert($rootScope.newTask);
        $scope.animationsEnabled = true;

        $scope.open = function () {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl'
                //size: size,
                //resolve: {
                //    items: function () {
                //        return $scope.items;
                //    }
                //}
            });
        };
    })
    .controller('ModalInstanceCtrl', function ($scope, $rootScope, $uibModalInstance) {
        $scope.add = function () {
            if ($rootScope.newTask == undefined || $rootScope.newTask.length === 0 || $rootScope.newTask.length < 1 || $rootScope.newTask == null) {
                alert("Array is empty");
                alert("1" + $rootScope.newTask);
            } else {
                // добавление нового объекта в массив и отчистка формы
                $uibModalInstance.close($rootScope.allTasks.push($rootScope.newTask));
                alert("2" + $rootScope.newTask);
                $rootScope.newTask = {};
            }

        };

        $scope.collapse = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
            $rootScope.newTask = {};
        };
    });


