module.exports = {
  "plugins": [
    "react",
    "jest",
    "jsx-a11y",
    "promise",
    "node"
  ],
  "extends": [
    "react-app",
    "plugin:react/recommended",
    "standard"
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
