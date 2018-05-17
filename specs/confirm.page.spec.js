var homePage = require ('../pages/home_page.js');
var animalPage = require ('../pages/animal_page.js');
var confirmPage = require ('../pages/confirm_page.js');

describe('confirm page', function() {

  beforeEach(function(){
    browser.get('confirm.html')
  })
  
  it('should be all elements on the confirm page', function(){
    var titleValue = 'Thank you'
    var mainTextValue = 'Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal.'
    confirmPage.backToHomeButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });
    confirmPage.title.getText().then(function(text) { expect(text).toBe(titleValue); });
    confirmPage.mainText.getText().then(function(text) { expect(text).toBe(mainTextValue) })
  })

  it('should be the proper title on the ConfirmPage', function(){
    var correctTitle = 'Zoo Adoption | Confirmation'
    expect(browser.getTitle()).toBe(correctTitle)
  })

  it('should be legitimate THETESTROOM.COM link', function(){
    var correctUrl = 'http://www.thetestroom.com/'
    confirmPage.link.getAttribute('href').then(function(text) {expect(text).toBe(correctUrl) })
  })


})
