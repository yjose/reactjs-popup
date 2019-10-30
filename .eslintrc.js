module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true
    }
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        bracketSpacing: false,
        jsxBracketSameLine: true
      }
    ],
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "no-case-declarations": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    "react/no-danger": 0,
    "react/prop-types": 0,
    'no-plusplus': 0,
    "react/forbid-prop-types":0,
    "global-require":0,
    "no-return-assign":0,
    "react/jsx-props-no-spreading":0
  }
};

// inspired by wes bos config
//https://www.youtube.com/watch?v=YIvjKId9m2c
