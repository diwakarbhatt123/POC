 (function () {
     angular.module("myFirstApp").controller("GreetingController", ["$scope", GreetingController]);

     function GreetingController($scope) {
         $scope.my = {
             name: "Diwakar"
         };
         $scope.sayHello = function () {
             return "What a day!!What a lovely day!!";
         };
     };
 })();