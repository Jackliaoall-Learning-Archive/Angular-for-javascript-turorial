(function(app) {
	app.ApplicationService = ng.core.Class({
		constructor: function() {},
		getCategories: function() {
			// 基于 Promise 承诺的服务
			return Promise.resolve(app.categories);
		},
		getApplications: function(){
			// 基于 Promise 承诺的服务
			return Promise.resolve(app.applications);
			
			// 模拟异步延迟的 Promise
//			return new Promise(resolve =>
//			    setTimeout(resolve, 2000)) // delay 2 seconds
//			    .then(() => app.applications);
		},
		getApplication: function(id){
			return Promise.resolve(this.getApplications().then(applications => applications.find(application => application.id==id)));
		}
	});
})(window.app || (window.app = {}));



