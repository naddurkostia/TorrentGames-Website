const shell = require('shelljs');

function defaultTask(cb) {
  shell.exec("sass --watch src/style/style.scss:src/css/style.min.css")
	shell.exec("live-server")
	cb();
  }
  
  exports.default = defaultTask