var timesink = require('timesink')
  , moment = require('moment')

module.exports = function (url, time) {
  function unixtime (t) {
    return t.format('x')
  }
  function format (t) {
    return {
      timeserver: t
      , difference: unixtime(moment()) - t
    }
  }
  return timesink(url, time).map(moment).map(unixtime).map(format)
}