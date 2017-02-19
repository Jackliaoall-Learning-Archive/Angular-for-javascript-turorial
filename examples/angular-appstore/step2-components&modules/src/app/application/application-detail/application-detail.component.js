(function(app) {
	app.ApplicationDetailComponent = ng.core
		.Component({
			selector: 'application-detail',
			template: `
				应用详情
			`
		})
		.Class({
			constructor: function() {
			}
		});
})(window.app || (window.app = {}));