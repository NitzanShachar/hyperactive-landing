var Land = angular.module('LandingPage');

Land.directive('header', function(){
    return{
        restrict: 'E',
        templateUrl: '/js/Components/Templates/Header.html'
    };
})