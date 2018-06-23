## Various exports of the wheat color

This package contains already statically computed variants of the wheat color.

Usage:
```js
const {rgb, hex} = require('@swatches/wheat');

// Use `rgb`, `hex` to show wheat in your application.
```

In the browser:
```js
const {hex} = require('@swatch/wheat/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/wheat`.

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

Exported as properties when importing `@swatches/wheat/string`.

- `rgb`
- `hsl`
- `hex`
