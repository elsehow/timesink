# timesink

poll a URL with an interval, kefir style

works in node and the browser
your timeserver should return an ISO-formatted date on a GET request.

## installation

`npm install timesink`

## usage

example - use timesink to periodically synchronise with a timeserver:

```javascript
var timesink = require('timesink')

var syncedTimes = timesink('http://my-timeserver.zone/', 500).map(Date.parse)
```

this will synchronise with the timeserver at my-timeserver.zone every 3000ms.

