(function(app) {
	// 引用分类管理模块
	app.CategoriesModule = ng.core
		.NgModule({
			imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],
			declarations: [app.CategoriesComponent],
			exports: [app.CategoriesComponent]
		})
		.Class({
			constructor: function() {}
		});
})(window.app || (window.app = {}));
