const path = require('path');
const craWebpack = require('react-scripts/config/webpack.config'); // eslint-disable-line

const getWebpack = () => {
  const config = craWebpack('development');
  config.resolve.alias['state-template'] = path.join(path.join(__dirname, 'src/lib/'));
  return config;
};

module.exports = {
  skipComponentsWithoutExample: true,
  components: [
    'src/lib/components/**/[A-Z]*.js',
  ],
  require: [
    path.join(__dirname, 'src/styleguidist/setup.js'),
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguidist/Wrapper'),
  },
  webpackConfig: getWebpack(),
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from 'state-template';`;
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.md');
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700',
        },
      ],
    },
  },
};
