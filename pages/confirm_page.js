var confirmPage = function() {

  this.getTitle = function() {

    return element(by.css('#title')).getText();

  }
  
  this.backToHomeButton = element(by.buttonText('BACK TO HOME'));
  this.title = element(by.id('title'));
  this.mainText = element(by.css('div.ng-scope p'));
  this.link = element(by.linkText('THETESTROOM.COM'))

};

module.exports = new confirmPage();