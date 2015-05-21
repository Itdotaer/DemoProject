define(['scripts/app'], function(app){
	'use strict';
	
	app.controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['$scope'];

	function AppCtrl($scope){
		$scope.appName = 'Hello world';
	}
});