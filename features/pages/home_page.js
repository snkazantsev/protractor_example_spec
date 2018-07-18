module.exports = new function() {
  this.get = function() { return browser.get('http://www.thetestroom.com/jswebapp/'); };
  this.continueButton = element(by.buttonText('CONTINUE'));
  this.input = element(by.model("person.name"));
  this.label = element(by.binding("person.name"));
  this.link = element(by.linkText('THETESTROOM.COM'));

  this.clickContinue = function() {
    element(by.buttonText('CONTINUE')).click();
    return require('./animal_page.js');
  };

};
