## Various exports of the teal color

This package contains already statically computed variants of the teal color.

Usage:
```js
const {rgb, hex} = require('@swatches/teal');

// Use `rgb`, `hex` to show teal in your application.
```

In the browser:
```js
const {hex} = require('@swatch/teal/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/teal`.

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

Exported as properties when importing `@swatches/teal/string`.

- `rgb`
- `hsl`
- `hex`
