import fathomConfig from '@fathomtech/eslint-config-fathom';

export default [
  ...fathomConfig,
  {
    rules: {
      // other rules and overrides
    },
    files: ["**/*.cjs", "**/*.mjs", "**/*.js"]
  },
  {
    files: ["scripts/build.mjs", "scripts/serve.mjs"],
    languageOptions: {
      globals: {
        process: "readonly"
      }
    }
  }
];
