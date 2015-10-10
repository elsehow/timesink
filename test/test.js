var timesink = require('..')
var timeserver = 'http://indra.webfactional.com/timeserver'
var syncedTimes = timesink(timeserver, 500)
syncedTimes.log()
