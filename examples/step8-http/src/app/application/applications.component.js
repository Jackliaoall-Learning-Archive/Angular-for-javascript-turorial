(function(app) {
	app.ApplicationsComponent = ng.core
		.Component({
			selector: 'application-list',
			templateUrl:'app/application/applications.component.html'
		})
		.Class({
			// 使用 ngOnInit 生命周期钩子，避免在构造函数中获取数据
			ngOnInit: function(){
//				this.categories = this.service.getCategories();
//				this.applications = this.service.getApplications();
				// 基于承诺的行动（使用 ES2015 箭头函数）
				this.service.getCategories().then(categories=>{this.categories = categories});
				this.service.getApplications().then(applications=>{this.applications = applications});
			},
			// 依赖注入服务对象， 构造函数仅完成参数赋值给属性
			constructor: [ng.router.Router, app.ApplicationService, function(router, service) {
				// 保存 Router 对象
				this.router = router;
				// 保存服务对象
				this.service = service;
			}],
			// 转到详情
			gotoDetail: function(application) {
				// 注入 ng.router.Router，使用 navigate 方法请求带参数的路由
				this.router.navigate(['/applications', application.id]);
			},
			// 处理选中处理
			onSelect:function(application){
				this.selectedApplication=application;
			},
			// 添加应用
			create: function(addForm) {
				// 获得数据并验证
				var id = addForm.id.value;
				var name = addForm.name.value;
				var downloads = addForm.downloads.value;
				var category = addForm.category.value;
				if(!id.trim() || !name.trim() || !downloads.trim()) {
					return;
				}
				// 由于内存 Web API 中 id 为数字，必须转换为数字保存
				this.service.create(new app.Application(parseInt(id), name, downloads, category)).then(application => {
					this.applications.push(application);
					addForm.reset(); // 重置添加表单
					this.selectedApplication = null;
				});
			},
			// 删除应用
			delete: function(application) {
				// 服务器端删除
				this.service.delete(application.id)
					.then(() => {
						// 客户端删除
						this.applications = this.applications.filter(function(o) {
							return o !== application;
						});
						if(this.selectedApplication === application) {
							this.selectedApplication = null;
						}
					});
			},
			// 通过 id 跟踪，判断数据条目是否存在，是否需要更新
			trackByApplications: function(index, application){
				return application.id;
			}
		});
})(window.app || (window.app = {}));