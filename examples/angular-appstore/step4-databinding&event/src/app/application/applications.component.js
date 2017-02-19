(function(app) {
	
	// 模拟数据
	const CATEGORYS=[
		new app.Category(1, '应用'),
		new app.Category(2, '游戏'),
		new app.Category(3, '音乐'),
		new app.Category(4, '图书')
	];
	const APPLICATIONS=[
		new app.Application(1001, 'Angular App', 300, CATEGORYS[0].name),
		new app.Application(1002, 'Big Game', 120, CATEGORYS[1].name),
		new app.Application(1003, 'Fantasy', 240, CATEGORYS[2].name),
		new app.Application(1004, 'Think in Java', 480, CATEGORYS[3].name),
		new app.Application(1005, 'Bang Game', 310, CATEGORYS[1].name),
		new app.Application(1006, 'The Mythical Man-Month', 680, CATEGORYS[3].name),
		new app.Application(1007, 'BootStrap App', 290, CATEGORYS[0].name)
	];
	
	app.ApplicationsComponent = ng.core
		.Component({
			selector: 'application-list',
			templateUrl:'app/application/applications.component.html'
		})
		.Class({
			constructor: function() {
				// 分类和应用数据列表
				this.categories = CATEGORYS;
				this.applications = APPLICATIONS;
			},
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