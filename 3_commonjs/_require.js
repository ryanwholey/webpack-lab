const fs = require('fs');

module.exports = function(dep) {
  return eval(fs.readFileSync(`${dep}.js`, 'utf8'));
};
