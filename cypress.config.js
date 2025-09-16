const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: false, // Desativa o isolamento de teste
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
