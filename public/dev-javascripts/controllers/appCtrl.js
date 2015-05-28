define(['app'], function(app){
	'use strict';
	
	app.controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['$scope'];

	function AppCtrl($scope){
		$scope.header = 
		{
			appName: 'Demo Project',
			menus:
			[
				{
					id: 0,
					name: 'Index',
					disName: '首页',
					state: 'index',
					active: true,
					subMenus:{

					}
				},
				{
					id: 1,
					name: 'Index',
					disName: '机构设置',
					state: 'index',
					active: false,
					subMenus:{

					}
				},
				{
					id: 2,
					name: 'Index',
					disName: '新闻信息',
					state: 'index',
					active: false,
					subMenus:{

					}
				},
				{
					id: 3,
					name: 'Index',
					disName: '关于我们',
					state: 'index',
					active: false,
					subMenus:{

					}
				}
			]
		};

		$scope.footer = {
			companyName: 'Boson'
		};
	}
});