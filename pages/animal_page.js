var animal_page = function() {

  this.selectAnimal = function(index) {
    element(by.model("animal")).$('[value="' + index + '"]').click();
  }

  this.clickContinue = function() {
    element(by.buttonText('CONTINUE')).click();
    return require('./confirm_page.js');
  };

  
  var backButton = element(by.buttonText('BACK'));
  

};
module.exports = new animal_page();
