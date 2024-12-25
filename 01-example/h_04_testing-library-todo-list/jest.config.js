/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(css|scss)$': '<rootDir>/internal/jest/cssTransform.js', // 針對 import 'xxx.scss'
  },
  moduleNameMapper: {
    // https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files
    '\\.(css|scss)$': 'identity-obj-proxy', // 針對 import style from 'xxx.module.scss'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
};

module.exports = config;
