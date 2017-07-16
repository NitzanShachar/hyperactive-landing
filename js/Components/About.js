var Land = angular.module('LandingPage');

Land.directive('about', function(){
    return{
        restrict: 'E',
        // controller: ['$scope', function($scope){
            
        // }],
        templateUrl: '/js/Components/Templates/About.html'
    };
})