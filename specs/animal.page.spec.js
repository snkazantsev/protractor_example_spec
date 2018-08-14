var homePage = require ('../pages/home_page.js');
var animalPage = require ('../pages/animal_page.js');
var confirmPage = require ('../pages/confirm_page.js');

describe('Animal page', function() {

  beforeEach(function() {
    browser.get('animalselection.html')
  });


  it('should be all elements on the animal page', function(){
    const promises=[]
    promises.push(homePage.input.isDisplayed()).eventually.equal(true);
    promises.push(homePage.label.isDisplayed()).eventually.equal(true);
    promises.push(homePage.continueButton.isDisplayed()).eventually.equal(true);
    return Promise.all(promises);
  })


  it('should be proper title on the AnimalPage', function(){
    var validAnimalPageTitle = 'Zoo Adoption | Select your Animal'
    expect(browser.getTitle()).toBe(validAnimalPageTitle)
  })

  
  it('should be legitimate THETESTROOM.COM link', function(){
    var legitimateHref = 'http://www.thetestroom.com/'
    expect(animalPage.link.getAttribute('href')).toBe(legitimateHref)
  })

    
  it('should be drop down text "Please select from the drop down below" by default', function(){
    var dropDownDefaultTextItem_0 = 'Please select from the drop down below'
    animalPage.dropDownItems.first().getText().then(function(text) {expect(text).toBe(dropDownDefaultTextItem_0)})
  })

    
  it('should be 4 elements in the drop down', function(){
    var numberOfDropDownElements = 4
    element.all(by.css('select.ng-valid option')).count().then(function(number) {
      expect(number).toBe(numberOfDropDownElements)
    })
  })

    
  it('should be able to select an element in the drop down', function(){
    var nemo = 'Nemo the Fish'

    return animalPage.chooseAnimal(nemo).then(function(){
      return animalPage.selectedElement.getText().then(function(text){
        expect(text).toBe(nemo)
      })
    });
  })
})

