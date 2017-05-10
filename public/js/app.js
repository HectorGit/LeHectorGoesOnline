angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

.controller('mainController', function() {
	var vm = this;
	vm.bigMessage = 'MAIN CONTROLLER';
})

// home page specific controller
.controller('homeController', function() {
	var vm = this;
	vm.message = 'HOME';
})

// about page specific controller
.controller('bioController', function() {
	var vm = this;
	vm.message = 'BIO';
})

.controller('recentController', function() {
	var vm = this;
	vm.message = 'RECENT';
})

.controller('experienceController', function() {
	var vm = this;
	vm.message = 'EXPERIENCE';
})

.controller('releasesController', function() {
	var vm = this;
	vm.message = 'RELEASES';
})

// contact page specific controller
.controller('contactController', function() {
	var vm = this;// define variables and objects on this
	vm.message = 'Message Sent !';
	vm.booleanVal = false;
	vm.messageSent = function(){
		vm.booleanVal = true;
	};
	
});