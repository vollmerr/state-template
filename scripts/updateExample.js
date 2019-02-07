// Updates example to latest local build
// by building then replacing the state-template
// package in the example's node_modules

// NOTE: this will make the examples state-template out of
// sync, only use this for testinng functionality
// then revert to using the latest npm version

const path = require('path');
const cp = require('child_process');
const os = require('os');
const chalk = require('chalk'); // eslint-disable-line

const { files } = require('../package.json');

const rootPath = path.resolve(__dirname, '..');
const isWindows = os.platform().startsWith('win');
const children = {};

// go through every 'file' that will get exported in publish
files.forEach((file) => {
  const buildPath = path.join(rootPath, file);
  const npmPath = path.join(rootPath, `/example/node_modules/state-template/${file}`);

  if (isWindows) {
    if (file.match(/.*\..*$/)) {
      // is a single file, use <name>* syntax for destination
      children[file] = cp.spawn('xcopy', ['/y', buildPath, `${npmPath}*`]);
    } else {
      // is a folder, recursive things...
      children[file] = cp.spawn('xcopy', ['/y', '/e', '/i', buildPath, npmPath]);
    }
  } else {
    // why is linux so much better...
    children[file] = cp.spawn('cp', ['-r', buildPath, npmPath]);
  }

  children[file].on('close', (code) => {
    if (!code) {
      console.log(chalk.green(`successfully copied ${file}`));
    } else {
      console.log(chalk.red(`failed to copy ${file} - exit code ${code}`));
    }
  });
});
