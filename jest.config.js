module.exports = {
  collectCoverage: false,
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    react: 'inferno-compat',
    'react-dom': 'inferno-compat'
  }
}
