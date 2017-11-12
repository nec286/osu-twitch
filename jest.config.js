module.exports = {
  collectCoverage: true,
  moduleDirectories: ['node_modules', '../peyote', 'src'],
  transformIgnorePatterns: ['node_modules\/(?!peyote)/'],
  moduleNameMapper: {
    react: 'inferno-compat',
    'react-dom': 'inferno-compat'
  }
}
