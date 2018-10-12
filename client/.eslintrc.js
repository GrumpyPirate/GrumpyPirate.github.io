module.exports = {
  "plugins": [
    "react",
    "jest",
    "jsx-a11y"
  ],
  "extends": [
    "react-app",
    "plugin:react/recommended",
    "airbnb"
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
        "config": "webpack.config.dev.js"
      }
    }
  },
  "rules": {
    "consistent-return": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-unescaped-entities": ["off", "'"]
  }
}
