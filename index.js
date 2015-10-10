var Kefir     = require('kefir')
  , kefirGet = require('kefir-get')

module.exports = function (url, interval) {
  return Kefir.interval(interval)
              .flatMapLatest(function () { return kefirGet(url) })
}
