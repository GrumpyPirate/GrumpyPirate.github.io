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
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
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
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.common.js"
      }
    }
  }
}
