define(['app', 'text!components/footer/footer.html'], function(app, html){
	'use strict';

	app.directive('footer', footer);

	//Inject
	footer.$inject = [];

	function footer(){
		var directive = {
			restrict: 'E',
			template: html,
			scope: {
				footer: '=footer'
			},
			controller: function($scope){
			}
		};

		return directive;
	}
});