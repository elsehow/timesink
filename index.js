var Kefir     = require('kefir')
  , kefirGet = require('./ajax.js')

module.exports = function (url, interval) {
  return Kefir.interval(interval)
              .flatMapLatest(kefirGet(url))
}
