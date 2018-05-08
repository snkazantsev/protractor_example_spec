var homePage = require ('../pages/home_page.js');
var animalPage = require ('../pages/animal_page.js');
var confirmPage = require ('../pages/confirm_page.js');

// spec.js
xdescribe('Adopt an animal on the zoo test site', function() {
  
  xit('should be able to adopt a title', function() {
    browser.get('http://www.thetestroom.com/jswebapp/');
    expect(browser.getTitle()).toEqual('Zoo Adoption | Home');
    element(by.model("person.name")).sendKeys("Subscribe");
    element(by.binding("person.name")).getText().then(function(text) {
      console.log(text);
    })
    element(by.buttonText("CONTINUE")).click();
    //element(by.model("animal")).$
    element(by.model("animal")).$('[value="1"]').click();
    element(by.partialButtonText("TINUE")).click();

  });



  xit('should be able to adopt a title by page objects', function() {
    browser.get('jswebapp/');
    var inputText = 'subscribe'
    homePage.enterFieldValue(inputText);
    var getHomePageText = homePage.getDynamicText();
    expect(getHomePageText).toBe(inputText);
    var animalPage = homePage.clickContinue();

    animalPage.selectAnimal(2);
    var continuePage = animalPage.clickContinue();

    expect(continuePage.getTitle()).toBe('Thank you');
    
  });

  it('should be all elements on the home page', function(){
    browser.get('/jswebapp/index.html')
    homePage.input.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    homePage.continueButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    homePage.label.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(false); });

  })

  it('should be all elements on the animal page', function(){
    browser.get('/jswebapp/animalselection.html')
    animalPage.backButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    animalPage.continueButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    animalPage.dropDown.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    
  })

  it('should be all elements on the confirm page', function(){
    browser.get('/jswebapp/confirm.html')
    confirmPage.backToHomeButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });

  })
})
