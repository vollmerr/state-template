module.exports = {
  resetMocks: true,
  collectCoverageFrom: [
    'src/lib/**/*.{js,jsx}',
    '!src/lib/style/**/*.{js,jsx}',
  ],
  // coverageThreshold: {
  //   global: {
  //     statements: 98,
  //     branches: 91,
  //     functions: 98,
  //     lines: 98,
  //   },
  // },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/src/test/mocks/css.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/test/setup.js',
  ],
  testRegex: '.*\\.test\\.js$',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@babel\\runtime\\helpers\\esm))/',
  ],
};
