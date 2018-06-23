## Various exports of the gainsboro color

This package contains already statically computed variants of the gainsboro color.

Usage:
```js
const {rgb, hex} = require('@swatches/gainsboro');

// Use `rgb`, `hex` to show gainsboro in your application.
```

In the browser:
```js
const {hex} = require('@swatch/gainsboro/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/gainsboro`.

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

Exported as properties when importing `@swatches/gainsboro/string`.

- `rgb`
- `hsl`
- `hex`
