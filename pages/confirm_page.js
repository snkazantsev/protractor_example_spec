var confirmPage = function() {

  this.getTitle = function() {

    return element(by.css('#title')).getText();

  }
  

};

module.exports = new confirmPage();