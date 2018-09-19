module.exports = {
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',

  coverageDirectory: 'report/coverage',
  collectCoverageFrom: ['projects/**/*.ts', 'src/app/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 70,
      lines: 80,
      statements: 80,
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/dist'],

  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],

  globals: {
    'ts-jest': {
      babelConfig: false,
      diagnostics: false,
    },
    __TRANSFORM_HTML__: true,
  },
};
