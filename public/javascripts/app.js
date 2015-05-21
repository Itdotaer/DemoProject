define(['angular', 'angular-ui-router', 'jquery', 'angular-bootstrap'], function () {
    var app = angular.module("app", ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/views/home.html',
                controller: 'HomeCtrl'
            });

        // Else
        $urlRouterProvider
            .otherwise('/');
    }]);

    var apps_deps = ['app'];

    require([
            'services/all',
            'directives/all',
            'controllers/all',
            'components/all'
        ], function() {
            angular
                .element(document)
                .ready(function() {
                    angular.bootstrap(document, apps_deps)
                });
        });

    return app;
});