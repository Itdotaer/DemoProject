define(['jquery', 'angular-bootstrap', 'angular-ui-router'], function (angularAMD) {
    var app = angular.module("app", ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: '/app/views/main.html',
                controller: 'AppCtrl'
            });

        // Else
        $urlRouterProvider
            .otherwise('/index');
    }]);

    var apps_deps = ['app'];

    require([
            'scripts/services/all',
            'scripts/directives/all',
            'scripts/controllers/all'
        ], function() {
            angular
                .element(document)
                .ready(function() {
                    angular.bootstrap(document, apps_deps)
                });
        });

    return app;
});