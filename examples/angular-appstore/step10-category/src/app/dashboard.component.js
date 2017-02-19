(function(app) {
	app.DashboardComponent = ng.core
		.Component({
			selector: 'appstore-dashboard', 
			templateUrl: 'app/dashboard.component.html'
		})
		.Class({
			// 初始化 dashboard 数据
			ngOnInit: function(){
				this.title="Applications Management";
				this.service.getApplications().then(applications=>{
					this.applications=applications; 
					// 分类数量
					this.applicationCount = applications.length;
					// 下载量 Top 3
					this.sortApplications=applications.slice(0, applications.length); 
					this.sortApplications=this.sortApplications.sort(function(e1,e2){
						return e2.downloads-e1.downloads;
					}).slice(0,3);
				});
				this.service.getCategories().then(categories=>{this.categories=categories; this.categoryCount = categories.length});
			},
			constructor: [app.ApplicationService, function(service) {
				this.service=service;
			}]
		});
})(window.app || (window.app = {}));

