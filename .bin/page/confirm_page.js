var confirm_page = function() {

  this.getTitle = function() {

    return element(by.css('#title')).getText();

  }
  

};

module.exports = new confirm_page();