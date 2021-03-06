const path = require('path');
const withCSS = require('@zeit/next-css');

const SOURCE = path.resolve(process.cwd(), 'src');

const cssConfiguration = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  }
};
const webpackConfiguration = {
  webpack(config, options) {
    if (!options.defaultLoaders) {
      throw new Error(
        'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
      );
    }

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      entries['./styles.css'] = path.resolve(SOURCE, 'assets/index.css');
      return entries;
    };

    return config;
  }
};

const configuration = {
  ...cssConfiguration,
  ...webpackConfiguration
};

module.exports = withCSS(configuration);
