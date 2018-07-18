module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.js?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/__test__/_config/'],
};
