var Land = angular.module('LandingPage');

Land.directive('comparison', function () {
    return {
        restrict: 'E',
        controller: ['$scope', function ($scope) {
            $scope.talpiot = {
                title: 'מסלול תלפיות',
                conclusion: 'סה"כ הכנסות פחות הוצאות ב4 שנים 490000',
                years: [
                    'שנה ראשונה –הכשרה חינם',
                    'שנה שניה –עבודה כמתכנת רווח 100000',
                    'שנה שלישית עבודה כמתכנת  רווח150000',
                    'שנה רביעית עבודה כמתכנת /ר"צ רווח של 240000'
                ]
            };
            $scope.degree = {
                title: 'מסלול תואר',
                conclusion: 'סה"כ הכנסות פחות הוצאות  107000 ש"ח',
                years: [
                    'שנה ראשונה- לימודים בעלות של כ-11000',
                    'שנה שניה לימודים בעלות של כ11000',
                    'שנה שלישית לימודים בעלות של כ11000',
                    'שנה ראשונה לעבודה  כ140000 ש"ח'
                ]
            };
        }],
        templateUrl: '/js/Components/Templates/Compare.html'
    };
});