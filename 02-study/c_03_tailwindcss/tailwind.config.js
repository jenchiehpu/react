/* eslint-disable no-param-reassign */
const plugin = require('tailwindcss/plugin');

module.exports = {
  jit: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#74b9ff',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addVariant, e }) => {
      const newUtilities = {
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      };
      addUtilities(newUtilities);

      addVariant('data-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`data-active${separator}${className}`)}[data-active="true"]`;
        });
      });

      // https://tailwindcss.com/docs/plugins#complex-variants
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}\\`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
