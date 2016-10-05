var singApp = angular.module('singApp', [
	'ngRoute',
	'ngMessages',
	'singControllers'
]);

singApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/case1',{
				templateUrl: 'js/templates/ng-message-case1.html'
			}).
			when('/case2',{
				templateUrl: 'js/templates/ng-message-case2.html'
			}).
			otherwise({
				templateUrl: 'js/templates/dummy.html'
			});
	}]);