const { defineConfig } = require("cypress")
const { allureCypress } = require("allure-cypress/reporter")

module.exports = defineConfig({
  projectId: "xbbcya",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
});
