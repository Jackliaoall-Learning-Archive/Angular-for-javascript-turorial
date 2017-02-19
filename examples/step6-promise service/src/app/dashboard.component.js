(function(app) {
	app.DashboardComponent = ng.core
		.Component({
			selector: 'empms-dashboard', 
			templateUrl: 'app/dashboard.component.html'
		})
		.Class({
			ngOnInit: function(){
				this.title="员工管理系统";
				this.empService.getEmps().then(emps=>{
					// dashboard 数据
					this.emps=emps; 
					this.empCount = emps.length;
					this.sortEmps=emps.slice(0,emps.length); // 薪资 Top 3
					this.sortEmps=this.sortEmps.sort(function(e1,e2){
						return e2.sal-e1.sal;
					}).slice(0,3);
				});
				this.empService.getDepts().then(depts=>{this.depts=depts; this.deptCount = depts.length});
			},
			constructor: [app.EmpService, function(empService) {
				this.empService=empService;
			}]
		});
})(window.app || (window.app = {}));

