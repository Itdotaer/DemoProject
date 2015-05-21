define(['app', 'text!components/header/header.html', 'lodash'], function(app, html, _){
	'use strict';

	app.directive('header', header);

	//Inject
	header.$inject = [];

	function header(){
		var directive = {
			restrict: 'E',
			template: html,
			scope: {
				header: '=header'
			},
			controller: function($scope){
				$scope.click = click;

				function click(index){
					_.forEach($scope.header.menus, function(menu, key){
						menu.active = false;
					});

					$scope.header.menus[index].active = true;
				}
			}
		};

		return directive;
	}
});