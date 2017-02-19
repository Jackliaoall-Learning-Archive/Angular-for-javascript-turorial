(function(app) {
  app.AppModule =
    // 模块定义
    ng.core.NgModule({
      // 导入的模块
      imports: [ 
	      ng.platformBrowser.BrowserModule,
	      ng.forms.FormsModule, 
	      app.AppRoutingModule, 
	      // HTTP
	      ng.http.HttpModule,  
	      // InMemoryWebApi
	      ng.inMemoryWebApi.InMemoryWebApiModule.forRoot(app.InMemoryDataService), 
	      app.ApplicationsModule,
	      app.CategoriesModule
      ],
      declarations: [ app.AppComponent, app.DashboardComponent ], 
      bootstrap: [ app.AppComponent],
      // 服务提供商
	  providers: [app.ApplicationService, app.CategoryService] 
    })
    .Class({
      constructor: function() {
      }
    });
})(window.app || (window.app = {}));

