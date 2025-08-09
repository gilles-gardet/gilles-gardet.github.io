/* eslint-disable */
export default {
  collectCoverageFrom: ['<rootDir>/src/app/**/*.{js,ts}'],
  coverageDirectory: './coverage',
  coverageReporters: ['clover', 'html', 'cobertura', 'text-summary', 'lcov'],
  displayName: 'cv',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    '^@features/(.*)$': '<rootDir>/src/app/features/$1',
    '^@pages/(.*)$': '<rootDir>/src/app/pages/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@state/(.*)$': '<rootDir>/src/+state/$1',
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: [],
  testEnvironment: '@happy-dom/jest-environment',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)'],
};
