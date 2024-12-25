module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // prettier-ignore
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-body-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'react/button-has-type': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/react-in-jsx-scope': 0,
  },
};
