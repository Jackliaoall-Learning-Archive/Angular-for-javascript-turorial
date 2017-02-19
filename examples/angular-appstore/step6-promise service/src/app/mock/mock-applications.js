(function(app) {
		// 模拟数据
	const CATEGORYS=[
		new app.Category(1, '应用'),
		new app.Category(2, '游戏'),
		new app.Category(3, '音乐'),
		new app.Category(4, '图书')
	];
	const APPLICATIONS=[
		new app.Application(1001, 'Angular App', 300, CATEGORYS[0].name),
		new app.Application(1002, 'Big Game', 120, CATEGORYS[1].name),
		new app.Application(1003, 'Fantasy', 240, CATEGORYS[2].name),
		new app.Application(1004, 'Think in Java', 480, CATEGORYS[3].name),
		new app.Application(1005, 'Bang Game', 310, CATEGORYS[1].name),
		new app.Application(1006, 'The Mythical Man-Month', 680, CATEGORYS[3].name),
		new app.Application(1007, 'BootStrap App', 290, CATEGORYS[0].name)
	];
	app.categories=CATEGORYS;
	app.applications=APPLICATIONS;
})(window.app || (window.app = {}));