define(['app'], function(app){
	'use strict';

	app.controller('HomeCtrl', HomeCtrl);

	//Inject
	HomeCtrl.$inject = ['$scope'];

	function HomeCtrl($scope){
		$scope.message = 'shit';
	}
});