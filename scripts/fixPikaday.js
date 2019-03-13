// WATCH FOR CHANGES IN pickaday.js
// At time of writing pikaday.js is on version 1.8.0
// https://github.com/Pikaday/Pikaday
//
// pikaday.js tryies to require moment.js, which we do not use.
// create-react-app does not like this... lets go mess with their
// code to change this.

const fs = require('fs');
const path = require('path');

const fixPikaday = () => {
  const pikaday = path.resolve('node_modules', 'pikaday', 'pikaday.js');
  // read pikaday file
  const data = fs.readFileSync(pikaday, 'utf-8');
  const momentRegex = / {2}try { moment =/g;
  // not already commented
  if (momentRegex.test(data)) {
    // fix it... comment out moment requires
    const fixedData = data.replace(momentRegex, '  // try { moment =');
    // write it back...
    fs.writeFileSync(pikaday, fixedData, 'utf-8');

    console.log(`
      Commented out pikaday.js requiring moment.js to ignore warnings...

      WATCH FOR UPDATES TO pikaday.js !!!
    `);
  }
};

try {
  fixPikaday();
} catch (err) {
  console.warn('failed to fix pikaday.js');
}
