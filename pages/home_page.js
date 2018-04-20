require ('./animal_page.js');

var homePage = function() {

  this.enterFieldValue = function(value) {
    element(by.model('person.name')).sendKeys(value);
  }

  this.getDynamicText = function() {
    return element(by.binding("person.name")).getText()       
    
  };

  this.clickContinue = function() {
    element(by.buttonText('CONTINUE')).click();
    return require('./animal_page.js');
  };

  this.continueButton = element(by.buttonText('CONTINUE'));
  this.input = element(by.model("person.name"));
  this.label = element(by.binding("person.name"));

};
module.exports = new homePage();
