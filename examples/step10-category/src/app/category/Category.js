(function(app) {
  app.Category = Category;
  
  /**
   * 应用类别类
   * @param {number} id 
   * @param {string} name 分类名称
   */
  function Category(id, name) {
    this.id = id;
    this.name = name;
  }
})(window.app || (window.app = {}));

