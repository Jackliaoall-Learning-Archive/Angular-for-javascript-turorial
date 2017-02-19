(function(app) {
	app.ApplicationsModule = ng.core
		.NgModule({
			// 导入的模块
			imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],
			// 定义声明模块
			declarations: [app.ApplicationsComponent, app.ApplicationDetailComponent],
			// 导出模块
			exports: [app.ApplicationsComponent, app.ApplicationDetailComponent]
		})
		.Class({
			constructor: function() {}
		});
})(window.app || (window.app = {}));