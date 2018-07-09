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
