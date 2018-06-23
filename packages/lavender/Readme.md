## Various exports of the lavender color

This package contains already statically computed variants of the lavender color.

Usage:
```js
const {rgb, hex} = require('@swatches/lavender');

// Use `rgb`, `hex` to show lavender in your application.
```

In the browser:
```js
const {hex} = require('@swatch/lavender/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/lavender`.

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

Exported as properties when importing `@swatches/lavender/string`.

- `rgb`
- `hsl`
- `hex`
