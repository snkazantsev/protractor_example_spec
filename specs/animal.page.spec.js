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

    
  fit('should be drop down text "Please select from the drop down below" by default', function(){
    var dropDownDefaultText = '     Please select from the drop down below\r\n     George the Turtle\r\n     Simba the Lion\r\n     Nemo the Fish\r\n'
    animalPage.dropDown.getText().then(function(text) {expect(text).toBe(dropDownDefaultText)})

  })

    
  xit('should be 4 elements in the drop down', function(){


  })

    
  xit('should be able to select an element in the drop down', function(){


  })

    
  xit('пока не перевел', function(){


  })

  

it('should be proper elements on the AnimalPage', function(){

    element(by.buttonText("CONTINUE")).click();
    //element(by.model("animal")).$
    element(by.model("animal")).$('[value="1"]').click();
    element(by.partialButtonText("TINUE")).click();

  });
  

  
  xit('should be able to adopt a title by page objects', function() {
    var inputText = 'subscribe'
    homePage.enterFieldValue(inputText);
    var getHomePageText = homePage.getDynamicText();
    expect(getHomePageText).toBe(inputText);
    var animalPage = homePage.clickContinue();

    animalPage.selectAnimal(2);
    var continuePage = animalPage.clickContinue();

    expect(continuePage.getTitle()).toBe('Thank you');
    
  });

})
// })

  
