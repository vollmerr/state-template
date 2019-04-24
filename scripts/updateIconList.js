const fs = require('fs');
const path = require('path');

/**
 * This script builds the icon list based off the core state template icon svg
 */

const fontFilePath = path.resolve(__dirname, '../src/lib/style/core/fonts/CaGov.svg');
const iconDefPath = path.resolve(__dirname, '../src/lib/components/Icon/Icon.d.ts');

const svgData = fs.readFileSync(fontFilePath, 'utf8');
const glyphRegex = /glyph-name="([^"]*)"/g;
const glyphNames = svgData.match(glyphRegex);

const iconDefNames = glyphNames
  .map(x => x.replace(glyphRegex, '$1')) // get just the name
  .sort()
  .map(x => `  | '${x}'\n`) // format name for typescript, ex for "code": "  | 'code'\n"
  .join('');

const iconDefContent = fs.readFileSync(iconDefPath, 'utf8');
const withNewNames = iconDefContent.replace(/(.*IconName =)[^;]*(;.*)/m, `$1\n${iconDefNames}$2`);
fs.writeFileSync(iconDefPath, withNewNames);
