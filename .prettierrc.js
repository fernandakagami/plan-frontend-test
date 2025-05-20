const plugin = require("eslint-plugin-react");

module.exports = {
  tabWidth: 2,
  endOfLine: 'auto',
  printWidth: 80,
  singleQuote: false,
  trailingComma: 'all',
  arrowParens: "always",
  bracketSpacing: true,
  semi: true,
  useTabs: true,
  jsxBracketSameLine: true,
  plugins: ["prettier-plugin-tailwindcss"]
};
