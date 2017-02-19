(function(app) {
  app.AppModule =
    // 模块定义
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ], 
      declarations: [ app.AppComponent ], // 添加 HeroFormComponent
      bootstrap: [ app.AppComponent] // 根组件
    })
    .Class({
      constructor: function() {
      }
    });
})(window.app || (window.app = {}));

