const { defineConfig } = require("cypress");
// const browserify = require("@cypress/browserify-preprocessor");
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");
// const {
//   preprendTransformerToOptions,
// } = require("@badeball/cypress-cucumber-preprocessor/browserify");
 
//  async function setupNodeEvents(on,config)
//  {
//   await addCucumberPreprocessorPlugin(on, config);
 
//   on(
//     "file:preprocessor",
//     browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
//   );
 
//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
//  }
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
module.exports = defineConfig({
  defaultCommandTimeout:6000,
  reporter: 'cypress-mochawesome-reporter',
  projectId:'28zfp3',
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
