const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e7wvhs',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  env:{
    baseURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    orangeURL: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

  },
});
