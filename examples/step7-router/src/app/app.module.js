(function(app) {
  app.AppModule =
    // 模块定义
    ng.core.NgModule({
      // 导入的模块
      imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule, app.AppRoutingModule, app.ApplicationsModule ], 
      declarations: [ app.AppComponent, app.DashboardComponent ], 
      bootstrap: [ app.AppComponent],
	  // 服务提供商
	  providers: [app.ApplicationService]   
    })
    .Class({
      constructor: function() {
      }
    });
})(window.app || (window.app = {}));

