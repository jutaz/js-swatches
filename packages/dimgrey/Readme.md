## Various exports of the dimgrey color

This package contains already statically computed variants of the dimgrey color.

Usage:
```js
const {rgb, hex} = require('@swatches/dimgrey');

// Use `rgb`, `hex` to show dimgrey in your application.
```

In the browser:
```js
const {hex} = require('@swatch/dimgrey/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/dimgrey`.

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

Exported as properties when importing `@swatches/dimgrey/string`.

- `rgb`
- `hsl`
- `hex`
