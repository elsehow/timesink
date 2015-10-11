# timesink

got a timeserver? get a [Kefir](https://rpominov.github.io/kefir/) stream of times from it!

## installation

`npm install timesink`

## usage

first, set up a timeserver that returns a plain/text ISO date 

to issue a request to your timeserver every 500 ms:

```javascript
var timesink = require('timesink')

var times = timesync('http://my-timeserver.zone', 500)
```

## API

### timesink(url, interval)

issues a GET request to `url` every `interval` ms. emits the response to the latest request, in case wires get crossed (see [flatMapLatest](https://rpominov.github.io/kefir/#flat-map-latest)
