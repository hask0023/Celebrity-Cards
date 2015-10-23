angular.module('Booya')

.config(function($routeProvider) {
    // routing here
    $routeProvider
    .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
    })
    .when('/details/:itemID', {
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
    })
    .otherwise({redirectTo: '/'});
})