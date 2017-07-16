var Land = angular.module('LandingPage');

Land.directive('partners', function(){
    return{
        restrict: 'E',
        controller: ['$scope', function($scope){
            $scope.customers = customers;
        }],
        templateUrl: '/js/Components/Templates/Partners.html'
    };
})
var path = './imgs/logos/';
var customers = [
    {title: 'allot', imgURL: path + 'allot.png'},
    {title: 'atnt', imgURL: path + 'atnt.png'},
    {title: 'avg', imgURL: path + 'avg.png'},
    {title: 'cellcom', imgURL: path + 'cellcom.png'},
    {title: 'checkpoint', imgURL: path + 'checkpoint.png'},
    {title: 'comverse', imgURL: path + 'comverse.jpg'},
    {title: 'devsense', imgURL: path + 'devsense.png'},
    {title: 'ebay', imgURL: path + 'ebay.png'},
    {title: 'emc2', imgURL: path + 'emc2.png'},
    {title: 'emccode', imgURL: path + 'emccode.png'},
    {title: 'emet', imgURL: path + 'emet.jpg'},
    {title: 'eventer', imgURL: path + 'eventer.png'},
    {title: 'gini-apps', imgURL: path + 'gini-apps.png'},
    {title: 'globalbit', imgURL: path + 'globalbit.png'},
    {title: 'gulliver', imgURL: path + 'gulliver.png'},
    {title: 'hiddenflights', imgURL: path + 'hiddenflights.jpg'},
    {title: 'hp', imgURL: path + 'hp.jpeg'},
    {title: 'IAI', imgURL: path + 'IAI.jpg'},
    {title: 'iDigital', imgURL: path + 'iDigital.jpg'},
    {title: 'intel', imgURL: path + 'intel.png'},
    {title: 'ironsource', imgURL: path + 'ironsource.png'},
    {title: 'IBM', imgURL: path + 'IBM.png'},
    {title: 'liveperson', imgURL: path + 'liveperson.png'},
    {title: 'motorola', imgURL: path + 'motorola.png'},
    {title: 'ness', imgURL: path + 'ness.jpg'},
    {title: 'nice', imgURL: path + 'nice.png'},
    {title: 'onoapps', imgURL: path + 'onoapps.png'},
    {title: 'orbotech', imgURL: path + 'orbotech.png'},
    {title: 'rndrobin', imgURL: path + 'rndrobin.jpg'},
    {title: 'travelist', imgURL: path + 'travelist.png'},
    {title: 'whooplay', imgURL: path + 'whooplay.png'}

]