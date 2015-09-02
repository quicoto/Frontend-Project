var XXX = XXX || {};

XXX.components = $.extend(XXX.components, {

    "component1": (function() {
        var $that = this;

        this._init = function($scope) {
            // Do something
        }, // init

        this._otherFuncion = function() {
            // Do something else
        }; // _otherFuncion

        return {
			init: $that._init,
            otherFunction: $that._otherFunction,
		};
    })()

}); // END of components
