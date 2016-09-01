/**
 * Created by ys on 2016/9/1.
 */
angular.module('ysBolg')
 .config(['$urlRouterProvider', '$stateProvider',
   function config($urlRouterProvider, $stateProvider) {
     $urlRouterProvider.when('poetry', '/poetry')
       .otherwise('/poetry');
     $stateProvider
       .state('poetry', {
         url: '/poetry',
         templateUrl: 'bund/Home/poetry.html'
       })
       .state('famine', {
         url: '/famine',
         templateUrl: 'bund/Home/famine.html'
       })
 }]);