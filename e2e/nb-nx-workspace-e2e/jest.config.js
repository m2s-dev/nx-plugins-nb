module.exports = {
  name: 'nb-nx-workspace-e2e',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../coverage/e2e/nb-nx-workspace-e2e',
};
