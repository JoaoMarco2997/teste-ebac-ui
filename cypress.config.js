const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'djevtd',
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
