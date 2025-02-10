const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
module.exports = defineConfig({
  defaultCommandTimeout:6000,
  reporter: 'cypress-mochawesome-reporter',
  env:{
   url:'https://rahulshettyacademy.com/loginpagePractise/#/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('before:run', async (details) => {
      //   console.log('override before:run');
      //   await beforeRunHook(details);
      // });

      // on('after:run', async () => {
      //   console.log('override after:run');
      //   await afterRunHook();
      // });
    },
    specPattern: 'cypress/integration/examples/*.js',
    video: true

  },
});
