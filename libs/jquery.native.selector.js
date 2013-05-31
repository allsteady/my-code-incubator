(function ($) {

	var slice = Array.prototype.slice;

	/**
	 * findBySelector - returns all elements matching specified
	 * selector down the dom tree from reference element. If
	 * jquery object collection is specified then the first object
	 * from that collection is used as the reference element.
	 * Returns jQuery object by default, to get NodeList, specify
	 * last param as true
	 *
	 * @param context {jQuery|Node} reference element
	 * @param selector {string}
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.findBySelector = function (context, selector, domResult) {
		var result = [];
		if ( context ) {
			context = context.get ? context.get(0) : context;
			result = context ? context.querySelectorAll(selector) : [];
		}
		return !domResult && $(result) || result;
	};

	/**
	 * @see $.findBySelector
	 *
	 * @param selector {string}
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.fn.findBySelector = function (selector, domResult) {
		return $.findBySelector(this, selector, domResult);
	};

	/**
	 * findBySelector - returns all elements matching specified
	 * role down the dom tree from reference element. If
	 * jquery object collection is specified then the first object
	 * from that collection is used as the reference element.
	 * Returns jQuery object by default, to get NodeList, specify
	 * last param as true
	 *
	 * @param context {jQuery|Node} reference element
	 * @param role {string}
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.findByRole = function (context, role, domResult) {
		var result = [];
		if ( context ) {
			context = context.get ? context.get(0) : context;
			result = context ? context.querySelectorAll('[data-' + $.mobile.ns + "role='" + role + "']") : [];
		}
		return !domResult && $(result) || result;
	};

	/**
	 * @see $.findByRole
	 *
	 * @param role {string}
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.fn.findByRole = function (role, domResult) {
		return $.findByRole(this, role, domResult);
	};

	/**
	 * findByClass - returns all elements matching specified
	 * class name down the dom tree from reference element. If
	 * jquery object collection is specified then the first object
	 * from that collection is used as the reference element.
	 * Returns jQuery object by default, to get NodeList, specify
	 * last param as true
	 *
	 * @param context {jQuery|Node} reference element
	 * @param selector {string} class name or names
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.findByClass = function (context, selector, domResult) {
		var result = [];
		if ( context ) {
			context = context.get ? context.get(0) : context;
			result = context ? context.getElementsByClassName(selector) : [];
		}
		return !domResult && $(result) || result;
	};

	/**
	 * @see $.findByClass
	 *
	 * @param selector {string} class name or names
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.fn.findByClass = function (selector, domResult) {
		return $.findByClass(this, selector, domResult);
	};

	/**
	 * findByTag - returns all elements matching specified
	 * tag down the dom tree from reference element. If
	 * jquery object collection is specified then the first object
	 * from that collection is used as the reference element.
	 * Returns jQuery object by default, to get NodeList, specify
	 * last param as true
	 *
	 * @param context {jQuery|Node} reference element
	 * @param selector {string} tag name
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.findByTag = function (context, selector, domResult) {
		var result = [];
		if ( context ) {
			context = context.get ? context.get(0) : context;
			result = context ? context.getElementsByTagName(selector) : [];
		}
		return !domResult && $(result) || result;
	};

	/**
	 * @see $.findByTag
	 *
	 * @param selector {string} tag name
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.fn.findByTag = function (selector, domResult) {
		return $.findByTag(this, selector, domResult);
	};

	/**
	 * childrenBySelector - returns all immediate elements
	 * that match specified selector. If jquery object 
	 * collection is specified then the first object
	 * from that collection is used as the reference element.
	 * Returns jQuery object by default, to get NodeList, specify
	 * last param as true
	 *
	 * @param context {jQuery|Node} reference element
	 * @param selector {string}
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.childrenBySelector = function (context, selector, domResult) {
		context = context.get ? context.get(0) : context;
		var nodes = $.findBySelector(context, selector, true),
			nodesArray = slice.call(nodes),
			result = nodesArray.filter(function (node) {
				return node.parentNode === context;
			});
		return !domResult && $(result) || result;
	};

	/**
	 * @see $.childrenBySelector
	 *
	 * @param selector {string}
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.fn.childrenBySelector = function (selector, domResult) {
		return $.childrenBySelector(this, selector, domResult);
	};

	/**
	 * childrenByClass - returns all immediate elements
	 * that match specified class name. If jquery object 
	 * collection is specified then the first object
	 * from that collection is used as the reference element.
	 * Returns jQuery object by default, to get NodeList, specify
	 * last param as true
	 *
	 * @param context {jQuery|Node} reference element
	 * @param selector {string} class name or names
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.childrenByClass = function (context, selector, domResult) {
		context = context.get ? context.get(0) : context;
		var nodes = $.findByClass(context, selector, true),
			nodesArray = slice.call(nodes),
			result = nodesArray.filter(function (node) {
				return node.parentNode === context;
			});
		return !domResult && $(result) || result;
	};

	/**
	 * @see $.childrenByClass
	 *
	 * @param selector {string} class name or names
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.fn.childrenByClass = function (selector, domResult) {
		return $.childrenByClass(this, selector, domResult);
	};

	/**
	 * childrenByTag - returns all immediate elements
	 * that match specified tag name. If jquery object 
	 * collection is specified then the first object
	 * from that collection is used as the reference element.
	 * Returns jQuery object by default, to get NodeList, specify
	 * last param as true
	 *
	 * @param context {jQuery|Node} reference element
	 * @param selector {string} tag name
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.childrenByTag = function (context, selector, domResult) {
		context = context.get ? context.get(0) : context;
		var nodes = $.findByTag(context, selector, true),
			nodesArray = slice.call(nodes),
			result = nodesArray.filter(function (node) {
				return node.parentNode === context;
			});
		return !domResult && $(result) || result;
	};

	/**
	 * @see $.childrenBySelector
	 *
	 * @param selector {string} tag name
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.fn.childrenByTag = function (selector, domResult) {
		return $.childrenByTag(this, selector, domResult);
	};

	/**
	 * childrenByRole - returns all immediate elements
	 * that match specified role. If jquery object 
	 * collection is specified then the first object
	 * from that collection is used as the reference element.
	 * Returns jQuery object by default, to get NodeList, specify
	 * last param as true
	 *
	 * @param context {jQuery|Node} reference element
	 * @param role {string}
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.childrenByRole = function (context, role, domResult) {
		context = context.get ? context.get(0) : context;
		var nodes = $.findByRole(context, role, true),
			nodesArray = slice.call(nodes),
			result = nodesArray.filter(function (node) {
				return node.parentNode === context;
			});
		return !domResult && $(result) || result;
	};

	/**
	 * @see $.childrenByRole
	 *
	 * @param role {string}
	 * @param domResult {boolean} sets the result type
	 * @return {jQuery|NodeList}
	 */
	$.fn.childrenByRole = function (role, domResult) {
		return $.childrenByRole(this, role, domResult);
	};

})(jQuery);
