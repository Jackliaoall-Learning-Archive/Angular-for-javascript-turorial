(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
  	 // 启用产品模式（ production mode）运行，禁用开发模式（development mod）
			ng.core.enableProdMode();
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule); // 启动 AppModule
  	});
})(window.app || (window.app = {}));



