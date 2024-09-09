import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "zow72u",
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        ...process.env,
      };
      return config;
    },
  },
});
