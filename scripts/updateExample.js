// Updates example to latest local build
// by building then replacing the state-template
// package in the example's node_modules

// NOTE: this will make the examples state-template out of
// sync, only use this for testinng functionality
// then revert to using the latest npm version

const path = require('path');
const cp = require('child_process');
const os = require('os');
const chalk = require('chalk');

const rootPath = path.resolve(__dirname, '..');
const buildPath = path.join(rootPath, 'dist');
const npmPath = path.join(rootPath, '/example/node_modules/state-template/dist');

console.log(`
  state-template dist being copied from\n
  ${chalk.magenta(buildPath)}\n
  to\n
  ${chalk.magenta(npmPath)}\n
`);

const isWindows = os.platform().startsWith('win');

let child;
if (isWindows) {
  child = cp.spawn('xcopy', ['/y', '/E', '/I', buildPath, npmPath]);
} else {
  child = cp.spawn('cp', ['-r', buildPath, npmPath]);
}

child.on('close', (code) => {
  if (!code) {
    console.log(chalk.green('successfully copied'));
  } else {
    console.log(chalk.red('failed to copy - exit code', code));
  }
});
