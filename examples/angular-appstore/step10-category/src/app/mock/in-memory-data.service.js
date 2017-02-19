(function(app) {
	app.InMemoryDataService = ng.core.Class({
		constructor: function() {},
		// CreateDb
		createDb: function() {
			var categories = [
				new app.Category(1, '应用'),
				new app.Category(2, '游戏'),
				new app.Category(3, '音乐'),
				new app.Category(4, '图书')
			];
			var applications = [
				new app.Application(1001, 'Angular App', 300, categories[0].name),
				new app.Application(1002, 'Big Game', 120, categories[1].name),
				new app.Application(1003, 'Fantasy', 240, categories[2].name),
				new app.Application(1004, 'Think in Java', 480, categories[3].name),
				new app.Application(1005, 'Bang Game', 310, categories[1].name),
				new app.Application(1006, 'The Mythical Man-Month', 680, categories[3].name),
				new app.Application(1007, 'BootStrap App', 290, categories[0].name)
			];
			return { "applications": applications, "categories": categories };
		}
	});
})(window.app || (window.app = {}));