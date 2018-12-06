const path = require('path');

module.exports = {
  skipComponentsWithoutExample: true,
  components: [
    'src/lib/components/**/*.js',
    'src/lib/containers/**/*.js',
  ],
  require: [
    path.join(__dirname, 'src/lib/style/core/css/cagov.core.css'),
    path.join(__dirname, 'src/styleguide/setup.js'),
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
};
