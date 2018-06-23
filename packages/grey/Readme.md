## Various exports of the grey color

This package contains already statically computed variants of the grey color.

Usage:
```js
const {rgb, hex} = require('@swatches/grey');

// Use `rgb`, `hex` to show grey in your application.
```

In the browser:
```js
const {hex} = require('@swatch/grey/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/grey`.

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

Exported as properties when importing `@swatches/grey/string`.

- `rgb`
- `hsl`
- `hex`
