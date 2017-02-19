(function(app) {

	app.CategoryService = ng.core.Class({
		constructor: [ng.http.Http, function(http) {
			this.http = http;
			this.categoriesUrl = 'api/categories';
		}],
		handleError: function(error) {
			console.error('An error occurred', error); // for demo purposes only
			return Promise.reject(error.message || error);
		},
		getCategories: function() {
			return this.http.get(this.categoriesUrl)
				.toPromise() //转换成Promise对象
				.then(response => response.json().data) //在 then 回调中提取出数据
				.catch(this.handleError);
		},
		update: function(selectedCategory) {
			// 在 URL 中的id 来告诉服务器应该更新哪个
			var url = `${this.categoriesUrl}/${selectedCategory.id}`;
			// put 的 body 是该员工的 JSON 字符串，它是通过调用JSON.stringify得到的
			// 并且在请求头中标记出的 body 的内容类型（application/json）
			return this.http
				.put(url, selectedCategory)
				.toPromise()
				.catch(this.handleError);
		},
		create: function(category) {
			return this.http
				.post(this.categoriesUrl, category)
				.toPromise()
				.then(response => response.json().data) //在 then 回调中提取出数据
				.catch(this.handleError);
		},
		delete: function(category) {
			var url = `${this.categoriesUrl}/${category.id}`;
			return this.http
				.delete(url)
				.toPromise()
				.catch(this.handleError);
		},
		getCategory: function(name) {
			return Promise.resolve(this.getCategories().then(categories => categories.find(category => category == name)));
		}
	});
})(window.app || (window.app = {}));