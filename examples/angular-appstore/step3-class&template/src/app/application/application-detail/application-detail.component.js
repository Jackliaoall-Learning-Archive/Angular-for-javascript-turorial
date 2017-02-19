(function(app) {
	app.ApplicationDetailComponent = ng.core
		.Component({
			selector: 'application-detail',
			templateUrl:'app/application/application-detail/application-detail.component.html'
		})
		.Class({
			constructor: function() {
			}
		});
})(window.app || (window.app = {}));