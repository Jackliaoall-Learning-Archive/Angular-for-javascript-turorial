(function(app) {
	app.ApplicationService = ng.core.Class({
		constructor: function() {},
		// 注入 Http 服务
		constructor:[ ng.http.Http, function(http) {
			this.http=http;
			 // URL to web api
			this.applicationsUrl = 'api/applications';
			this.categoriesUrl = 'api/categories';
			// web api header
			this.headers = new ng.http.Headers({'Content-Type': 'application/json'});
		}],
		// 处理 HTTP 请求错误
		handleError: function(error){
			console.error('An error occurred', error); // for demo purposes only
  			return Promise.reject(error.message || error);
		},
		// 查询分类列表
		getCategories: function() {
			// 使用 get 请求 URL 获得数据
			 return this.http.get(this.categoriesUrl)
               .toPromise() //转换成Promise对象
               .then(response => response.json().data) //在 then 回调中提取出数据
               .catch(this.handleError);
		},
		// 查询应用列表
		getApplications: function(){
			// 使用 get 请求 URL 获得数据
			return this.http.get(this.applicationsUrl)
               .toPromise() //转换成Promise对象
               .then(response => response.json().data) //在 then 回调中提取出数据
               .catch(this.handleError);
		},
		// 修改应用
		update: function(selectedApplication){
			// 在 URL 中的id 来告诉服务器应该更新哪个
			var url = `${this.applicationsUrl}/${selectedApplication.id}`;
	    	// 使用 put 请求 URL 修改数据
	    	// put 的 body 是该员工的 JSON 字符串，它是通过调用JSON.stringify得到的
	    	// 并且在请求头中标记出的 body 的内容类型（application/json）
		    return this.http
			    .put(url, JSON.stringify(selectedApplication), {headers: this.headers})
			    .toPromise()
			    .catch(this.handleError);
		},
		// 添加应用
		create: function(application){
			// 使用 post 请求 URL 添加数据
			return this.http
				    .post(this.applicationsUrl, JSON.stringify(application), {headers: this.headers})
				    .toPromise()
				    .then(res => res.json().data)
				    .catch(this.handleError);
		},
		delete: function(id){
			// 使用 delete 请求 URL 删除数据
			var url = `${this.applicationsUrl}/${id}`;
			console.info(id)
			return this.http
				    .delete(url)
				    .toPromise()
				    .catch(this.handleError);
		},
		getApplication: function(id){
			// 使用 get 请求 URL 根据 id 查询数据
			var url = `${this.applicationsUrl}/${id}`;
			return this.http.get(url)
				    .toPromise()
				    .then(response => response.json().data) //在 then 回调中提取出数据
				    .catch(this.handleError);
		}
	});
})(window.app || (window.app = {}));



