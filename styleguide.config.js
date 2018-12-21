const path = require('path');
const craWebpack = require('react-scripts/config/webpack.config.dev'); // eslint-disable-line

const getWebpack = () => {
  const config = craWebpack;
  config.resolve.alias['state-template'] = path.join(path.join(__dirname, 'src/lib/'));
  return config;
};

module.exports = {
  skipComponentsWithoutExample: true,
  components: [
    'src/lib/components/**/*.js',
    'src/lib/containers/**/*.js',
  ],
  require: [
    path.join(__dirname, 'src/lib/style/core/css/cagov.core.css'),
    path.join(__dirname, 'src/styleguidist/setup.js'),
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguidist/Wrapper'),
  },
  webpackConfig: getWebpack(),
};
