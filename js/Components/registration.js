var Land = angular.module('LandingPage');

Land.directive('registration', function () {
    return {
        restrict: 'E',
        controller: ['$scope', function ($scope) {
            $scope.user = {
                name: '',
                phone: '',
                email: ''
            }
            $scope.onFormSubmit = function(){
                console.log($scope.user);
            };
        }],
        templateUrl: '/js/Components/Templates/registration.html'
    };
});