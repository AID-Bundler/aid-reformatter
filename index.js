const { Plugin } = require('aid-bundler')

module.exports = function (options) {
  function formatWhitespace (data, outputText) {
    if (!options.formatWhitespace) return
    if (data.history.length === 0) return

    data.text = data.text.trim().replace('\n', '')

    if (outputText) {
      data.text = '\n ' + data.text
    } else {
      data.text = '\n\n' + data.text
    }
  }

  function inputModifier (data) {
    formatWhitespace(data, false)
  }
  
  function contextModifier (data) {
    // Passthrough
  }
  
  function outputModifier (data) {
    formatWhitespace(data, true)
  }

  return new Plugin('Formatter', inputModifier, contextModifier, outputModifier)
}
