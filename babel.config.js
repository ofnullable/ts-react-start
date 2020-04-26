module.exports = {
  presets: ['react-app'],
  plugins: [
    '@loadable/babel-plugin',
    ['babel-plugin-emotion', {
      sourceMap: true,
    }],
  ],
};
