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
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    format:  'pretty',
    require: 'specs/step_definitions/*.js', // This is where we'll be writing our actual tests
  },

  params: {
    env: {
      hostname: 'http://0.0.0.0:8000' // Whatever the address of your app is
    }
  },

  directConnect: true,
  specs: ['specs/features/**/*.feature'],
  baseUrl: 'http://www.thetestroom.com/jswebapp/'
}
