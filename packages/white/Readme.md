## Various exports of the white color

This package contains already statically computed variants of the white color.

Usage:
```js
const {rgb, hex} = require('@swatches/white');

// Use `rgb`, `hex` to show white in your application.
```

In the browser:
```js
const {hex} = require('@swatch/white/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/white`.

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

Exported as properties when importing `@swatches/white/string`.

- `rgb`
- `hsl`
- `hex`
