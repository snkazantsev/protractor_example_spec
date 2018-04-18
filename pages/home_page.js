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

};
module.exports = new homePage();
