const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const homePage = require("../pages/home_page.js");
const cucumber = require("cucumber");

cucumber.When('User is on home page', function () {
  return homePage.get();
});

cucumber.Then('Browser title should be equal {string}', function (title) {
  return expect(browser.getTitle()).eventually.equal(title);
});

cucumber.Then('Proper elements should be on the HomePage', function () {
  return expect(homePage.input.isDisplayed()).eventually.equal(true);
  return expect(homePage.label.isDisplayed()).eventually.equal(false);
  return expect(homePage.continueButton.isDisplayed()).eventually.equal(true);
});
 
cucumber.Then('THETESTROOM.COM link should be legitimate', function () {
  return expect(homePage.link.getAttribute('href')).eventually.equal('http://www.thetestroom.com/')
});
 
cucumber.Then('Input field by default should be empty', function() {
  return expect(homePage.getDynamicInputText()).eventually.equal("");
  return expect(homePage.getDynamicLabelText()).eventually.equal("");
});                      

cucumber.Then('Text in the Input firld should be reflected in the Label', function() {
  var inputText = 'reflection'
  homePage.enterFieldValue(inputText);
  return expect(homePage.getDynamicLabelText()).eventually.equal(inputText);
});
