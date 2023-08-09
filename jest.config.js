const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.{js,ts}'],
  coverageReporters: ['clover', 'html', 'cobertura', 'text-summary'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  preset: 'jest-preset-angular',
  reporters: ['default'],
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  testPathIgnorePatterns: ['<rootDir>/e2e', '<rootDir>/src/test.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      isolatedModules: true,
    }]
  },
};
