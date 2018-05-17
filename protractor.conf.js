// conf.js
exports.config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      // run in headless mode
      args: ['--headless', '--verbose', '--privileged', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', 'disable-infobars=true' ],
      prefs: {
        credentials_enable_service: false,
      },
     }
  },
  framework: 'jasmine',
  directConnect: true,
  specs: ['specs/**/*.spec.js'],
  baseUrl: 'http://www.thetestroom.com/jswebapp/'
}
