module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    // https://www.npmjs.com/package/@storybook/addon-essentials
    '@storybook/addon-essentials'
  ],
};
