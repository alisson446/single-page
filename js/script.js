angular.module('single', ['ngRoute']).config(function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl: 'default.html',
			controller: 'default'
		})

		.when('/content', {
			templateUrl: 'content.html',
			controller: 'content'
		});

		//.otherwise({redirectTo: '/'});
});

angular.module('single').controller('default', function($scope, $location) {
	$scope.redirecionar = $location.path();
});

angular.module('single').controller('content', function($scope, $location) {
	$scope.redirecionar = $location.path();
});