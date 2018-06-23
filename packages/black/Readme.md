## Various exports of the black color

This package contains already statically computed variants of the black color.

Usage:
```js
const {rgb, hex} = require('@swatches/black');

// Use `rgb`, `hex` to show black in your application.
```

In the browser:
```js
const {hex} = require('@swatch/black/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/black`.

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

Exported as properties when importing `@swatches/black/string`.

- `rgb`
- `hsl`
- `hex`
