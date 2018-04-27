var homePage = require ('../pages/home_page.js');
var animalPage = require ('../pages/animal_page.js');
var confirmPage = require ('../pages/confirm_page.js');

describe('confirm page', function() {

  beforeEach(function(){
    browser.get('/jswebapp/confirm.html')
  })
  
  it('should be all elements on the confirm page', function(){
    // browser.get('/jswebapp/confirm.html')
    confirmPage.backToHomeButton.isDisplayed().then(function(isDisp) { expect(isDisp).toBe(true); });

  })


  fit('should be the proper title on the ConfirmPage', function(){
    var correctTitle = 'Zoo Adoption | Confirmation'
    expect(browser.getTitle()).toBe(correctTitle)

  })


  xit('should be legitimate THETESTROOM.COM link', function(){


  })


  xit('', function(){


  })

})
