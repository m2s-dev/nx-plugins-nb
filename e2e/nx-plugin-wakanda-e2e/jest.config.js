module.exports = {
  name: 'nx-plugin-wakanda-e2e',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../coverage/e2e/nx-plugin-wakanda-e2e',
};
