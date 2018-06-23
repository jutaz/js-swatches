## Color swatches

A silly project that exports each color as it's own package under `@swatch` scope on npm. Example usage:

`npm install --save @swatch/crimson`

```js
const {hex} = require('@swatch/crimson');

instance.setBackgroundColor(hex);
```


Also exposes `string` sub-package for string version of these colors:
```js
const {hex} = require('@swatch/crimson/string');

document.body.style.backgroundColor = hex;
```


## Supported formats


List of all supported color formats.

### As raw values

- `hsl`
- `hsv`
- `hwb`
- `cmyk`
- `xyz`
- `lab`
- `lch`
- `hex`
- `keyword`
- `ansi16`
- `ansi256`
- `hcg`
- `apple`
- `gray`

### As string values

- `rgb`
- `hsl`
- `hex`
