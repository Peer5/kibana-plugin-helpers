var execFileSync = require('child_process').execFileSync;

module.exports = function (plugin, run, command) {
  command = command || {};

  var cmd = (process.platform === 'win32') ? 'bin\\kibana.bat' : 'bin/kibana';
  var args = ['--dev', '--plugin-path', plugin.root];

  if (command.unkownOptions) {
    args = args.concat(command.unkownOptions);
  }

  execFileSync(cmd, args, {
    cwd: plugin.kibanaRoot,
    stdio: ['ignore', 1, 2]
  });
};
