import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "mocha-report",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    retries: 1,
    chromeWebSecurity: false,
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 6000,
    requestTimeout: 4000,
    video: true,
    env: {
      username: "standard_user",
      password: "secret_sauce",
    },
    setupNodeEvents(on, config) {},
  },
});
