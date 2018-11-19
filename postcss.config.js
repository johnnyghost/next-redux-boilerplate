module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        browsers: ['> 1%', 'last 4 versions']
      }
    }
  }
};
