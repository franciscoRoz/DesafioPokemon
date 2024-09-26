module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/styleMock.js'
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js']
}