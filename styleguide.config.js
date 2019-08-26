const path = require('path');

module.exports = {
  skipComponentsWithoutExample: true,
  components: [
    'src/lib/components/**/[A-Z]*.js',
  ],
  require: [
    path.join(__dirname, 'src/styleguidist/setup.js'),
    path.join(__dirname, 'src/lib/style/core/css/cagov.core.min.css'),
    path.join(__dirname, 'src/lib/style/core/css/colorscheme-oceanside.min.css'),
    path.join(__dirname, 'src/lib/style/style.scss'),
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguidist/Wrapper'),
  },
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
