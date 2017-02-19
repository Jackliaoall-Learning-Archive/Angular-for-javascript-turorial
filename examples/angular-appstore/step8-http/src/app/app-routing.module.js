(function(app) {
	// 配置路由
	var routes = [
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // 重定向
	  	{ path: 'dashboard', component: app.DashboardComponent },
	  	{ path: 'applications', component: app.ApplicationsComponent },
	  	{ path: 'applications/:id', component: app.ApplicationDetailComponent }
	];

	app.AppRoutingModule = ng.router.RouterModule.forRoot(routes);
	
})(window.app || (window.app = {}));


