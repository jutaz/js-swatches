## Various exports of the lightgrey color

This package contains already statically computed variants of the lightgrey color.

Usage:
```js
const {rgb, hex} = require('@swatches/lightgrey');

// Use `rgb`, `hex` to show lightgrey in your application.
```

In the browser:
```js
const {hex} = require('@swatch/lightgrey/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/lightgrey`.

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

Exported as properties when importing `@swatches/lightgrey/string`.

- `rgb`
- `hsl`
- `hex`
