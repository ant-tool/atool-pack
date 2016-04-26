# atool-pack

[![NPM version](https://img.shields.io/npm/v/atool-pack.svg?style=flat)](https://npmjs.org/package/atool-pack)

----

"npm pack + extract" tool

### cli:
```bash
$ npm install -g atool-pack
$ atool-pack module dir
```

eg:

```bash
$ atool-pack rcf ./
```


### api
```javascript
var pack = require("atool-pack");
pack(module, dir);
```

eg:

```javascript
pack('rcf', './').then(() => {
  console.log('success');
}).catch(err => {
  conole.log(err);
})
```

## License

Component is released under the MIT license.