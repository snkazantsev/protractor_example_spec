var animalPage = function() {
  var self = this
  this.selectAnimal = function(index) {
    element(by.model("animal")).$('[value="' + index + '"]').click();
  }

  this.clickContinue = function() {
    element(by.buttonText('CONTINUE')).click();
    return require('./confirm_page.js');
  };

  
  this.backButton = element(by.buttonText('BACK'));
  this.continueButton = element(by.buttonText('CONTINUE'));
  this.selectAnimalElement = element(by.model('animal'))

  this.selectedElement = element(by.model("animal")).$('option:checked');

  this.h1 = element(by.tagName('h1'));
  this.link = element(by.linkText('THETESTROOM.COM'))
  this.dropDownItems = element.all(by.css('select.ng-valid option'))
  
  this.chooseAnimal = function (animalName) {
    return self.selectAnimalElement.click().then(function(){
      return element.all(by.options('animal in animals')).filter(function(item){
        return item.getText().then(function(text){
          return text === animalName
        })
      }).first().click()
    })
  }

};
module.exports = new animalPage();
