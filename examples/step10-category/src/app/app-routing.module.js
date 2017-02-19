(function(app) {
	// 配置路由
	var routes = [
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // 重定向
		{ path: 'dashboard', component: app.DashboardComponent },
		{ path: 'applications', component: app.ApplicationsComponent },
		{ path: 'applications/:id', component: app.ApplicationDetailComponent },
		{ path: 'categories', component: app.CategoriesComponent },
		{ path: 'categories/:id', component: app.CategoriesComponent },
		{ path: 'categories/applications/:category', component: app.ApplicationsComponent }
	];

	app.AppRoutingModule = ng.router.RouterModule.forRoot(routes);

})(window.app || (window.app = {}));