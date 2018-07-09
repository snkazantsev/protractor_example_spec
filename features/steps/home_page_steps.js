var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var HomeSteps = function() {

  var HomePage = require("../pages/home_page.js");

  this.World = function MyWorld() {
    this.page = new HomePage();
  };

  this.Given('I go to my website', function (callback) {
    // browser.get(url);
    // browser.get('http://www.thetestroom.com/jswebapp/');
    this.page.get();
    callback();
  });

  this.Then('the result should equal $result', function (result, callback) {
    expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
  });
};

module.exports = HomeSteps;
