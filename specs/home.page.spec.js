var homePage = require ('../pages/home_page.js');

describe('Home page', function() {

  beforeEach(function() {
    browser.get('/jswebapp/index.html')
  });

  it('should be proper elements on the HomePage', function(){
    homePage.input.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    homePage.continueButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    homePage.label.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(false); });

  });
  
  
  it('should be the proper title on the HomePage', function() {
    var validHomePageTitle = 'Zoo Adoption | Home'
    expect(browser.getTitle()).toBe(validHomePageTitle)
  
  });
  
  
  it('should be legitimate THETESTROOM.COM link', function() {
    var validLinkHref = 'http://www.thetestroom.com/';
    expect(homePage.link.getAttribute('href')).toBe(validLinkHref);

  });
  
  
  it('should be empty input field by default', function() {
    var getHomePageInputText = homePage.getDynamicInputText();
    expect(getHomePageInputText).toBe("");
    var homePageLabelText = homePage.getDynamicLabelText();
    expect(homePageLabelText).toBe("");

  });
  
  
  it('should be able to adopt a title', function() {
    var inputText = 'subscribe'
    homePage.enterFieldValue(inputText);
    var homePageLabelText = homePage.getDynamicLabelText()
    expect(homePageLabelText).toBe(inputText);

  });

})
