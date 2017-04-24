angular.module('routerRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
	$routeProvider
	
		.when('/',{
			templateUrl : 'views/pages/home.html',
			controller : 'homeController',
			controllerAs : 'home'
		})
		
		.when('/bio',{
			templateUrl : 'views/pages/bio.html',
			controller : 'bioController',
			controllerAs : 'bio'
		})
		
		.when('/recent',{
			templateUrl : 'views/pages/recent_projects.html',
			controller : 'recentController',
			controllerAs : 'recent'
		})
		
		.when('/experience',{
			templateUrl : 'views/pages/rec_experience.html',
			controller : 'experienceController',
			controllerAs : 'experience'
		})
		
		.when('/releases',{
			templateUrl : 'views/pages/releases.html',
			controller : 'releasesController',
			controllerAs : 'releases'
		})
		
		.when('/contact',{
			templateUrl : 'views/pages/contact.html',
			controller : 'contactController',
			controllerAs : 'contact'
		});
	
	$locationProvider.html5Mode(true);
		
});