var npm = require('npm')

module.exports = function conditionNPM(pluginConfig, config, cb) {
  var script = config.script || 'test'

  npm.load({loaded: false}, (err) => {
    if (err) { cb(err) }
    npm.commands.runScript([script], cb)
  })
}
