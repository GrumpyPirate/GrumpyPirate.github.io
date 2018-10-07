module.exports = {
  "plugins": [
    "react",
    "jest",
    "jsx-a11y",
    "promise",
    "import",
    "node"
  ],
  "extends": [
    "standard",
    "react-app",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "fetch": true
  },
  "env": {
    "jest/globals": true
  }
}
