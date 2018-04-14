var home_page = require ('../pages/home_page.js');

// spec.js
describe('Adopt an animal on the zoo test site', function() {
  
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
    home_page.enterFieldValue(inputText);
    var getHomePageText = home_page.getDynamicText();
    expect(getHomePageText).toBe(inputText);
    var animal_page = home_page.clickContinue();

    animal_page.selectAnimal(2);
    var continue_page = animal_page.clickContinue();

    expect(continue_page.getTitle()).toBe('Thank you');
    
  });

  it('should be all elements on the animal page', function(){
    browser.get('jswebapp/')
    var animal_page = home_page.clickContinue()
    animal_page.backButton.isDisplayed().then(function(isDisp) { expect(isDips).toBe(true); });
    // var foo = animal_page.backButton
    // expect(foo.isDisplayed()).toBe(false);
    
  })
})
