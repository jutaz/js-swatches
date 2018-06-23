## Various exports of the crimson color

This package contains already statically computed variants of the crimson color.

Usage:
```js
const {rgb, hex} = require('@swatches/crimson');

// Use `rgb`, `hex` to show crimson in your application.
```

In the browser:
```js
const {hex} = require('@swatch/crimson/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/crimson`.

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

Exported as properties when importing `@swatches/crimson/string`.

- `rgb`
- `hsl`
- `hex`
