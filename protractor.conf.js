// conf.js
exports.config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      // run in headless mode
      // args: ['--verbose', '--privileged', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', 'disable-infobars=true' ],
      args: ['--headless', '--verbose', '--privileged', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', 'disable-infobars=true' ],
      prefs: {
        credentials_enable_service: false,
      },
     }
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    tags: false,
  //  format: 'pretty',
    profile: false,
    'no-source': true
  },
  directConnect: true,
  specs: ['features/*.feature'],
  baseUrl: 'http://www.thetestroom.com/jswebapp/'
}
