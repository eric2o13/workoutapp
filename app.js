angular.module('WorkoutApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('WorkoutApp').config(function($routeProvider) {

    $routeProvider.

      when('/list', {
        templateUrl: 'partial/list/list.html',
        controller: 'ListCtrl'
      }).
      
      when('/list/excersices/:excersiceId', {
        templateUrl: 'partial/detail/detail.html',
        controller: 'DetailCtrl'
      }).

      otherwise({
        redirectTo: '/list'
      });
    
   /* $routeProvider.
      when('/test', {
        templateUrl: 'partial/detail/detail.html',
        controller: 'DetailCtrl'
    }); */

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/list'});

});

angular.module('WorkoutApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
