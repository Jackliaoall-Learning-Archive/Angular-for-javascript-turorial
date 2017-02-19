(function(app) {
  app.AppModule =
    // 模块定义
    ng.core.NgModule({
    	// 导入的模块
      imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule, app.ApplicationsModule ], 
      declarations: [ app.AppComponent ], 
      bootstrap: [ app.AppComponent] 
    })
    .Class({
      constructor: function() {
      }
    });
})(window.app || (window.app = {}));

