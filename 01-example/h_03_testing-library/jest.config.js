/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
};

module.exports = config;
