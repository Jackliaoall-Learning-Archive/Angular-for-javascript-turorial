(function(app) {
	app.ApplicationDetailComponent = ng.core
		.Component({
			selector: 'application-detail',
			templateUrl:'app/application/application-detail/application-detail.component.html',
			// 接收父组件输入的属性
			inputs:['categories', 'selectedApplication']
		})
		.Class({
			constructor: function() {
			}
		});
})(window.app || (window.app = {}));