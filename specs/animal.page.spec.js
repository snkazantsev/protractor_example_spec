var homePage = require ('../pages/home_page.js');
var animalPage = require ('../pages/animal_page.js');
var confirmPage = require ('../pages/confirm_page.js');

describe('Animal page', function() {

  beforeEach(function() {
    browser.get('animalselection.html')
  });


  it('should be all elements on the animal page', function(){
    animalPage.backButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    animalPage.continueButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    animalPage.dropDown.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    animalPage.h1.getText().then(function(text) { expect(text).toBe('Select you Animal from the drop down below'); });
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
    animalPage.dropDownItem_0.getText().then(function(text) {expect(text).toBe(dropDownDefaultTextItem_0)})
  })

    
  it('should be 4 elements in the drop down', function(){
    var numberOfDropDownElements = 4
    expect(element.all(by.css('select.ng-valid option')).count()).toEqual(numberOfDropDownElements)

    // Tried to use Page Object to the 'options' elements without luck
    // expect((animalPage.dropDownItems).count().toEqual(numberOfDropDownElements))
  })

    
  it('should be able to select an element in the drop down', function(){
    var dropDownDefaultTextItem_3 = 'Nemo the Fish'
    animalPage.selectAnimal(2)
    // didn't find a way to get a cuttently selected item text
    animalPage.dropDownItem_3.getText().then(function(text) {expect(text).toBe(dropDownDefaultTextItem_3)})
  })

    
  xit('пока не перевел', function(){
    // since I didn't find a way to get a cuttently selected item text, I have no idea how to test it.

    // проверка того что после выбора элемента в дропдауне, возврата на предыдущую страницу (BACK) и повторного перехода на страницу AnimalPage (CONTINUE) значение в дропдауне не сохраняеться

  })

})

