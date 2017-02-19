(function(app) {
	app.ApplicationSearchComponent = ng.core
		.Component({
			selector: 'application-search',
			templateUrl: 'app/application/application-search/application-serach.component.html',
			styles:[
			`.search-result{
				  border-bottom: 1px solid #eee;
				  border-left: 1px solid #eee;
				  border-right: 1px solid #eee;
				  height: 40px;
				  padding: 5px;
				  background-color: white;
				  cursor: pointer;
				}`
			]
		})
		.Class({
			ngOnInit: function() {
				var _this = this;
				this.applications = this.searchTerms
					// 归并请求。减轻服务器资源，减少客户流量。
					.debounceTime(300) // 获得输入后，等待超过 300ms 才实际发起请求
					.distinctUntilChanged() // 只在过滤条件变化时才发送请求， 避免重复请求同一个搜索词
					// 调用搜索服务。它会取消并丢弃以前的搜索可观察对象，只保留最近的。
					.switchMap(function(term) {
						return term // 搜索框为空时，时间返回一个空 Observable
							?
							_this.service.search(term) 
							:
							Rx.Observable.of([]);
					})
					.catch(function(error) {
						console.log(error);
						return Rx.Observable.of([]);
					});
				
			},
		
			constructor: [ng.router.Router, app.ApplicationService, function(router, service) {
				this.router = router;
				this.service = service;
				// Subject（主题）是一个可观察的事件流中的生产者。
				this.searchTerms = new Rx.Subject();
			}],
			search: function(term) {
				// 用户输入时，调用 next 来把新的字符串放进该主题的可观察流中
				this.searchTerms.next(term);
			},
			gotoDetail: function(application) {
				this.router.navigate(['/applications', application.id]);
			}
		});
})(window.app || (window.app = {}));