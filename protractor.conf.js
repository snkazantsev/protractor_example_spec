// conf.js
exports.config = {
  capabilities: {
    // browserName: 'chrome'
    'browserName': 'firefox'
  },
  framework: 'jasmine',
  directConnect: true,
  specs: ['specs/**/*.spec.js'],
  baseUrl: 'http://www.thetestroom.com/jswebapp/'
}