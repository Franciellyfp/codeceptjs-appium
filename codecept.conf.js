exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'iOS',
      app: '/Users/frfpedroso/Desktop/apk/qazandoapp.app',
      desiredCapabilities: {
        deviceName: 'iPhone 12 Pro Max',
        platformVersion: '14.2'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  name: 'appsqazando',
   tests: './steps/*_test.js'
}