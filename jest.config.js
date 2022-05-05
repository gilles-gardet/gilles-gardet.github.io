const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**', '!**/coverage/**', '!**/e2e/**'],
  coverageReporters: ['clover', 'html', 'cobertura'],
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  preset: 'jest-preset-angular',
  reporters: ['default'],
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  testPathIgnorePatterns: ['<rootDir>/e2e', '<rootDir>/src/test.ts'],
};
