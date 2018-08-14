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

// cucumber.Then('Proper elements should be on the HomePage', async function () {
//   await expect(homePage.input.isDisplayed()).eventually.equal(true);
//   await expect(homePage.label.isDisplayed()).eventually.equal(false);
//   await expect(homePage.continueButton.isDisplayed()).eventually.equal(true);
// });

cucumber.Then('Proper elements should be on the HomePage', function () {
  const promises = [];
  promises.push(expect(homePage.input.isDisplayed()).eventually.equal(true));
  promises.push(expect(homePage.label.isDisplayed()).eventually.equal(false));
  promises.push(expect(homePage.continueButton.isDisplayed()).eventually.equal(true));
  return Promise.all(promises);
});
 
cucumber.Then('THETESTROOM.COM link should be legitimate', function () {
  return expect(homePage.link.getAttribute('href')).eventually.equal('http://www.thetestroom.com/')
});
 
cucumber.Then('Input and label fields by default should be empty', function() {
  return expect(homePage.input.getText()).eventually.equal("");
  return expect(homePage.label.getText()).eventually.equal("");
});                      

cucumber.Then('Text in the Input field should be reflected in the Label', function() {
  var inputText = 'reflection'
  homePage.input.sendKeys(inputText); 
  return expect(homePage.label.getText()).eventually.equal(inputText);
});
