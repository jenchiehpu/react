module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    // prettier-ignore
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'react/jsx-filename-extension': 0,
    'no-param-reassign': ['error', { props: false }],
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/button-has-type': 0,
  },
};
