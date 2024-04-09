const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://hom.sgmaster.com.br/',
    retries: {
      runMode: 1,
      openMode: 1
    }
  },
});
