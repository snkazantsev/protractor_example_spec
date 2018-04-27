var animalPage = function() {

  this.selectAnimal = function(index) {
    element(by.model("animal")).$('[value="' + index + '"]').click();
  }

  this.clickContinue = function() {
    element(by.buttonText('CONTINUE')).click();
    return require('./confirm_page.js');
  };

  
  this.backButton = element(by.buttonText('BACK'));
  this.continueButton = element(by.buttonText('CONTINUE'));
  this.dropDown = element(by.model("animal"));
  this.h1 = element(by.tagName('h1'));
  this.link = element(by.linkText('THETESTROOM.COM'))
  

};
module.exports = new animalPage();
