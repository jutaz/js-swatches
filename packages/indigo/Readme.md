## Various exports of the indigo color

This package contains already statically computed variants of the indigo color.

Usage:
```js
const {rgb, hex} = require('@swatches/indigo');

// Use `rgb`, `hex` to show indigo in your application.
```

In the browser:
```js
const {hex} = require('@swatch/indigo/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/indigo`.

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

Exported as properties when importing `@swatches/indigo/string`.

- `rgb`
- `hsl`
- `hex`
