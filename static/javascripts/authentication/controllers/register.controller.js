/**
 * Register controller
 * @namespace mappl2.authentication.controllers 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.authentication.controllers')
		.controller('RegisterController', RegisterController);
		
	RegisterController.$inject = ['$location', '$scope', 'Authentication'];
	
	/**
	 * @namespace RegisterController
	 *  
	 */
	function RegisterController($location, $scope, Authentication) {
		var vm = this;
		
		vm.register = register;
		
		activate();
		
		/**
		 * @name activate
		 * @desc Actions to be performed when this controller is instantiated
		 * @memberOf mappl2.authentication.controllers.RegisterController 
		 */
		function activate() {
			//if the user is authenticated, they should not be here
			if(Authentication.isAuthenticated()) {
				$location.url('/');
			}
		}
		
		/**
	 	* @name register
	 	* @desc Register a new user
	 	* @memberOf mappl2.authentication.controllers.RegisterController 
	 	*/
		function register() {
			Authentication.register(vm.email, vm.password, vm.username);
			$location.url('/login');
		}
	}
})();
