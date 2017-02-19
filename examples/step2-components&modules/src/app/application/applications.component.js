(function(app) {
	app.ApplicationsComponent = ng.core
		.Component({
			selector: 'application-list',
			template: `
				应用列表
			`
		})
		.Class({
			constructor: function() {
			}
		});
})(window.app || (window.app = {}));