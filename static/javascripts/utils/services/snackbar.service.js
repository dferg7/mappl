/**
 * Snackbar
 * @namespace mappl2.utils.services 
 */
(function($,_) {
	'use strict';
	
	angular
		.module('mappl2.utils.services')
		.factory('Snackbar', Snackbar);
		
	/**
	 * @namespace Snackbar 
	 */
	function Snackbar() {
		/**
		 * @name Snackbar
		 * @desc The factory to be returned 
		 */
		var Snackbar = {
			error: error,
			show: show
		};
		
		return Snackbar;
		
		//////////////////////
		
		/**
		 * @name _snackbar
		 * @desc Display a snackbar
		 * @param {string} title 
		 * @param {string} content The content of the snackbar
		 * @param {string} image The image of the pin
		 * @param {decimal} latitude of the pin
		 * @param {decimal} longitude of pin
		 * @param {string} link of pin
		 * @param {Object} options Options for displaying the snackbar
		 */
		function _snackbar(title, options) {
			
			options = _.extend({timeout: 3000}, options);
			options.title = title;
			
			$.snackbar(options);
		}
		
		/**
		 * @name error 
		 * @desc Display an error snackbar
		 * @param {string} content The content of the snackbar
		 * @param {Object} options Options for displaying the snackbar
		 * @memberOf mappl2.utils.services.Snackbar 
		 */
		function error(title, options) {
			_snackbar('Error: ' + title, options);
		}
		
		/**
		 * @name show
		 * @desc Diplay a standard snackbar
		 * @param {string} content The content of the snackbar
		 * @param {string} image The image of the snackbar
		 * @param {Object} options Options for displaying the snackbar
		 * @memberOf mappl2.utils.services.Snackbar 
		 */
		function show(title, options){
			
			_snackbar(title, options);
		}
	}
})($, _);
