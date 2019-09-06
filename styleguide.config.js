const path = require('path');

module.exports = {
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  sections: [
    {
      name: 'Getting Started',
      sections: [
        {
          name: 'Introduction',
          content: 'src/styleguidist/sections/getting-started/introduction.md',
        },
        {
          name: 'Basic Project Setup',
          content: 'src/styleguidist/sections/getting-started/project-setup.md',
        },
        {
          name: 'Theming',
          content: 'src/styleguidist/sections/getting-started/theming.md',
        },
      ],
    },
    {
      name: 'Components',
      components: ['src/lib/components/**/[A-Z]*.js'],
      sectionDepth: 0,
    },
    {
      name: 'Utilities',
      sections: [
        {
          name: 'Async',
          content: 'src/styleguidist/sections/utilities/async.md',
        },
        {
          name: 'Form',
          content: 'src/styleguidist/sections/utilities/form.md',
        },
        {
          name: 'Messages',
          content: 'src/styleguidist/sections/utilities/messages.md',
        },
        {
          name: 'Redux',
          content: 'src/styleguidist/sections/utilities/redux.md',
        },
      ],
    },
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
