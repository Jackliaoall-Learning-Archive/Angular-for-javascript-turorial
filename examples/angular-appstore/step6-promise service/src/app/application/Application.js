(function(app) {
  app.Application = Application;
  
  /**
   * 应用类
   * @param {number} id 
   * @param {string} name 名称
   * @param {number} downloads 下载量
   * @param {string} category 分类
   */
  function Application(id, name, downloads, category) {
    this.id = id;
    this.name = name;
    this.downloads = downloads;
    this.category = category;
  }
})(window.app || (window.app = {}));

