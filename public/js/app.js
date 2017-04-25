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

	/*
	vm.messages = [
	{ name: 'Manuela', telephone : '1-234-567', email: 'manuela@a.com', message: 'Hi Hector' },
	{ name: 'Victor', telephone : '1-234-567', email: 'victor@b.com', message: 'Hi Hector' },
	{ name: 'Freddy', telephone : '1-234-567', email: 'freddy@c.com', message: 'Hi Hector' }
	];
	
	vm.contactData = {};
	
	vm.addContactMessage = function() {
		// add a computer to the list
		vm.messages.push({
			name: vm.contactData.name,
			telephone: vm.contactData.telephone,
			email: vm.contactData.email,
			message: vm.contactData.message
		});
		// after our computer has been added, clear the form
		vm.contactData = {};
	};
	*/
	
});