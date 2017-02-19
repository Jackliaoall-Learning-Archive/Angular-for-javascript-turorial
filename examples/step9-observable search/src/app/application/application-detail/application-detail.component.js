(function(app) {
	app.ApplicationDetailComponent = ng.core
		.Component({
			selector: 'application-detail',
			templateUrl:'app/application/application-detail/application-detail.component.html',
			// 接收父组件输入的属性
			inputs:['categories', 'selectedApplication']
		})
		.Class({
			// 获得路由参数，显示 id 对应的详情
			ngOnInit: function() {
				var params=this.router.params.value; // 路由参数
				this.service.getCategories().then(categories=>{this.categories = categories});
				this.service.getApplication(params.id).then(applications => this.selectedApplication = applications);
			},
			// 依赖注入 ActivatedRoute，Location
			constructor: [ng.router.ActivatedRoute, ng.common.Location, app.ApplicationService, function(router, location, service) {
				this.location=location;
				this.router=router;
				this.service=service;
			}],
			// 返回
			goBack: function() {
			 	this.location.back();
			},
			// 保存修改
			save: function(){
				 this.service.update(this.selectedApplication)
    			.then(() => this.goBack()); // 保存后返回上一页
			}
		});
})(window.app || (window.app = {}));