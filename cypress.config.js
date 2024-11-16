const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xbbcya",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
