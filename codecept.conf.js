const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1366, 768);

exports.config = {
  output: './output',
  
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com',
      browser: 'chrome',
      windowSize: '1366x768',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        },
        pageLoadStrategy: 'none' //normal causes issues with the test, infinite page laod
      },
      smartWait: 10000,
      waitForTimeout: 10000,
      timeouts: {
        script: 60000,
        'page load': 10000
      }
    }
  },
  
  include: {
    I: './steps_file.js',
    homePage: './pages/HomePage.js',
    livestreamPage: './pages/LivestreamPage.js'
  },
  
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },
  
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  }
}

