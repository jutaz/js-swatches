## Various exports of the gold color

This package contains already statically computed variants of the gold color.

Usage:
```js
const {rgb, hex} = require('@swatches/gold');

// Use `rgb`, `hex` to show gold in your application.
```

In the browser:
```js
const {hex} = require('@swatch/gold/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/gold`.

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

Exported as properties when importing `@swatches/gold/string`.

- `rgb`
- `hsl`
- `hex`
