
(function(app) {
	// 配置路由
	var routes = [
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // 重定向
	  	{ path: 'dashboard', component: app.DashboardComponent },
	  	{ path: 'emps', component: app.EmpsComponent },
	  	{ path: 'emps/:id', component: app.EmpDetailComponent }
	];

	app.AppRouterModule = ng.router.RouterModule.forRoot(routes);
	
})(window.app || (window.app = {}));


