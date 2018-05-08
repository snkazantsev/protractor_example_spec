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
  this.dropDownItem_0 = element(by.model("animal")).$('[value="0"]');
  this.dropDownItem_3 = element(by.model("animal")).$('[value="3"]');
  this.h1 = element(by.tagName('h1'));
  this.link = element(by.linkText('THETESTROOM.COM'))
  this.dropDownItems = element.all(by.css('select.ng-valid option'))
  

};
module.exports = new animalPage();
