## Various exports of the azure color

This package contains already statically computed variants of the azure color.

Usage:
```js
const {rgb, hex} = require('@swatches/azure');

// Use `rgb`, `hex` to show azure in your application.
```

In the browser:
```js
const {hex} = require('@swatch/azure/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/azure`.

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

Exported as properties when importing `@swatches/azure/string`.

- `rgb`
- `hsl`
- `hex`
