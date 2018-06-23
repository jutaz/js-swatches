## Various exports of the olive color

This package contains already statically computed variants of the olive color.

Usage:
```js
const {rgb, hex} = require('@swatches/olive');

// Use `rgb`, `hex` to show olive in your application.
```

In the browser:
```js
const {hex} = require('@swatch/olive/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/olive`.

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

Exported as properties when importing `@swatches/olive/string`.

- `rgb`
- `hsl`
- `hex`
