var handlebars = require('handlebars');
var fs = require('fs');

function usageAndExit() {
  console.info('node compile.js template vars');
  process.exit(1);
}

if(process.argv.length != 4) usageAndExit();

var tpl = process.argv[2];
var vars = require('./' + process.argv[3]);

fs.readFile(tpl, 'utf8', function (err, source) {
  if (err) throw err;
  var template = handlebars.compile(source);
  if(vars.functions) {
    Object.getOwnPropertyNames(vars.functions).forEach(function(val) {
      handlebars.registerHelper(val, vars.functions[val]);
    });
  }
  console.info(template(vars));
})
