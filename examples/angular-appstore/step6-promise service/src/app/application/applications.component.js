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
			constructor: [app.ApplicationService, function(service) {
				// 保存服务对象
				this.service = service;
			}],
			// 处理选中处理
			onSelect:function(application){
				this.selectedApplication=application;
			},
			// 添加
			create: function(addForm) {
				// 获得数据并验证
				var id = addForm.id.value;
				var name = addForm.name.value;
				var downloads = addForm.downloads.value;
				var category = addForm.category.value;
				if(!id.trim() || !name.trim() || !downloads.trim()) {
					return;
				}
				this.applications.push(new app.Application(id, name, downloads, category));
				addForm.reset(); // 重置添加表单
				this.selectedApplication = null;
			},
			// 删除
			delete: function(application) {
				this.applications = this.applications.filter(function(o) {
						return o !== application;
				});
				if(this.selectedApplication === application) {
					this.selectedApplication = null;
				}
			},
			// 通过 id 跟踪，判断数据条目是否存在，是否需要更新
			trackByApplications: function(index, application){
				return application.id;
			}
		});
})(window.app || (window.app = {}));