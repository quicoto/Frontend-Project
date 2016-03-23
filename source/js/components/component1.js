'use strict';

var XXX = XXX || {};

XXX.components = $.extend(XXX.components, {

    "component1": (function() {
        var $that = this;

        this._init = function($scope) {
            // Do something
			if (DEBUG) { console.info("[Component1] init..."); }
			
            $that._otherFunction();
        }; // init

        this._otherFunction = function() {
            // Do something else
        }; // _otherFunction

        return {
			init: $that._init,
            otherFunction: $that._otherFunction,
		};
    })()

}); // END of components
