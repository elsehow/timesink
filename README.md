# timesink

periodically poll a URL. get a kefir stream of responses.

works in node and the browser!

## installation

`npm install timesink`

## usage

example - use timesink to periodically synchronise with a timeserver:

```javascript
var timesink = require('timesink')

var syncedTimes = timesink('http://my-timeserver.zone/', 500).map(Date.parse)
```

this will synchronise with the timeserver at my-timeserver.zone every 500ms.

## api

`timesink(url, interval)`

issues a GET request to `url` every `interval` ms.

returns a kefir stream of responses.
