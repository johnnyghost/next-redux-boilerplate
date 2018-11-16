const next = require('next');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = next({
  dev: isDevelopment,
  dir: './src'
});
