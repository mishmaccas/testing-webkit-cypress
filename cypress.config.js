const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   baseUrl: "https://google.com",
   supportFile: "cypress/support/index.js",
   experimentalWebKitSupport: true,
   experimentalSessionAndOrigin: true
  }
});
