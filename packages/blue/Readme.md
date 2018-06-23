## Various exports of the blue color

This package contains already statically computed variants of the blue color.

Usage:
```js
const {rgb, hex} = require('@swatches/blue');

// Use `rgb`, `hex` to show blue in your application.
```

In the browser:
```js
const {hex} = require('@swatch/blue/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/blue`.

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

Exported as properties when importing `@swatches/blue/string`.

- `rgb`
- `hsl`
- `hex`
