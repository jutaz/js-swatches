## Various exports of the lightcoral color

This package contains already statically computed variants of the lightcoral color.

Usage:
```js
const {rgb, hex} = require('@swatches/lightcoral');

// Use `rgb`, `hex` to show lightcoral in your application.
```

In the browser:
```js
const {hex} = require('@swatch/lightcoral/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/lightcoral`.

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

Exported as properties when importing `@swatches/lightcoral/string`.

- `rgb`
- `hsl`
- `hex`
