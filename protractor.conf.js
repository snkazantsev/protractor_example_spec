// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/animal.page.spec.js'],
  baseUrl: 'http://www.thetestroom.com'
}