## Various exports of the mintcream color

This package contains already statically computed variants of the mintcream color.

Usage:
```js
const {rgb, hex} = require('@swatches/mintcream');

// Use `rgb`, `hex` to show mintcream in your application.
```

In the browser:
```js
const {hex} = require('@swatch/mintcream/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/mintcream`.

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

Exported as properties when importing `@swatches/mintcream/string`.

- `rgb`
- `hsl`
- `hex`
