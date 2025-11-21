// import js from "@eslint/js";
// import { defineConfig } from "eslint/config";
import globals from "globals";

import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
    globals: globals.browser
  },
    plugins: {
    js: pluginJs,
  },
    rules: {
    semi: "warn",
    ...pluginJs.configs.recommended.rules,
    },
  },
];