const path = require('path');

module.exports = {
  components: 'src/lib/components/**/*.js',
  require: [
    path.join(__dirname, 'src/lib/style/core/css/cagov.core.css'),
  ],
};
