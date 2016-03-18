import npm from 'npm'

export default function conditionNPM(pluginConfig, config = {}, cb) {
  const script = config.script || 'test'

  npm.load({loaded: false}, (err) => {
    if (err) { cb(err) }
    npm.commands.runScript([script], cb)
  })
}
