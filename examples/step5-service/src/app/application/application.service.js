(function(app) {
	app.ApplicationService = ng.core.Class({
		constructor: function() {},
		getCategories: function() {
			return app.categories;
		},
		getApplications: function(){
			return app.applications;
		}
	});
})(window.app || (window.app = {}));

