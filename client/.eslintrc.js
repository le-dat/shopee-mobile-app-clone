module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        trailingComma: "es5",
        arrowParens: "always",
        jsxBracketSameLine: false,
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
  },
};
