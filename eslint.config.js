const ui = require("@dcl/eslint-config/ui.config")

module.exports = [
  ...ui,
  {
    // TODO: Remove this override after fixing lint errors in a separate PR
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]
