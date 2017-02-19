"use strict";
(function(app) {

    var categoryId=50; // 分类 id，自动增长初始值
    
	app.CategoriesComponent = ng.core
		.Component({
			selector: 'category-list',
			templateUrl: 'app/category/categories.component.html'
		})
		.Class({
			// Step5. 避免在构造函数中获取数据，使用 ngOnInit 生命周期钩子
			ngOnInit: function() {
				// Step6. 基于承诺的行动，使用 ES2015 箭头函数
				this.service.getCategories().then(categories => {
					this.categories = categories;
					
					// 从 Dashboard 跳转过来的详情
					var params=this.activatedRoute.params.value;
					if(params&&params.id){
						this.selectedDept=this.categories.filter(e => e.id==params.id)[0];
					}
					
				});
				this.title = "分类信息列表";
				
			},
			// Step5. 构造函数仅完成参数赋值给属性
			constructor: [ng.router.ActivatedRoute, ng.router.Router, app.CategoryService, function(activatedRoute, router, service) {
				this.activatedRoute = activatedRoute;
				this.router = router;
				this.service = service;
			}],
			// Step4
			onSelect: function(category) {
				this.selectedCategory = category;
			},
			update: function(){
				 this.service.update(this.selectedCategory);
			},
			add: function(category) {
				if(!category.trim()) {
					return;
				}
				this.service.create(new app.Category(categoryId,category)).then(category => {
					this.categories.push(category);
					this.selectedCategory = null;
					categoryId=categoryId+10; // 分类 id，自动增长
				});
			},
			delete: function(category) {
				this.service.delete(category)
					.then(() => {
						this.categories = this.categories.filter(function(e) {
							return e !== category;
						});
						if(this.selectedCategory === category) {
							this.selectedCategory = null;
						}
					});
			},
			// 通过 id 跟踪，判断数据条目是否存在，是否需要更新
			trackByCategories: function(index, category){
				return category.id;
			}
		});
})(window.app || (window.app = {}));