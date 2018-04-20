var confirmPage = function() {

  this.getTitle = function() {

    return element(by.css('#title')).getText();

  }
  
  this.backToHomeButton = element(by.buttonText('BACK TO HOME'));

};

module.exports = new confirmPage();