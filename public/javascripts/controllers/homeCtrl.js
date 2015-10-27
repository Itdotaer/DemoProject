define(['app'], function(app){
	'use strict';

	app.controller('HomeCtrl', HomeCtrl);

	//Inject
	HomeCtrl.$inject = ['$scope', 'logger'];

	function HomeCtrl($scope, logger){
		$scope.message = 'shit';

		logger.logInfo('Hello world.')
	}
});
