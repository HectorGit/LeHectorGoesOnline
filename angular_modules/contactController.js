angular.module('contactControllerApp', [])

.controller('contactController', function() {

var vm = this;

vm.messages = [
{ name: 'Person1', telephone: 123, email: 'abc', message : 'need help' },
{ name: 'Person2', telephone: 456, email: 'def', message : 'with a' },
{ name: 'Person3', telephone: 789, email: 'ghi', message : 'hard thing'}
];

vm.contactData = {}; // fields will be name, telephone, email and message

vm.addContactMessage = function() {

	vm.messages.push({
		name: vm.contactData.name,
		telephone: vm.contactData.telephone,
		email: vm.contactData.email,
		message: vm.contactData.message
	});

	vm.contactData = {};
};

});