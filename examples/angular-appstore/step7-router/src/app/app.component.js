(function(app) {
	app.AppComponent = ng.core
		.Component({
			selector: 'appstore-app', 
			// 将模板定义为应用的壳，只处理导航
			template: `
			<div class="container-fluid">
				<h1> {{title}} </h1>
				<ul class="nav nav-pills">
					  <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><a routerLink="/dashboard">管理中心</a></li>
					  <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><a routerLink="/applications">应用管理</a></li>
					  <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><a routerLink="/categories">分类管理</a></li>
					</ul>
				<router-outlet></router-outlet>
			</div>
			`,
			styleUrls: ['app/app.component.css']
		})
		.Class({
			constructor: function() {
				this.title="Angular App Store";
			}
		});
})(window.app || (window.app = {}));

