## Various exports of the red color

This package contains already statically computed variants of the red color.

Usage:
```js
const {rgb, hex} = require('@swatches/red');

// Use `rgb`, `hex` to show red in your application.
```

In the browser:
```js
const {hex} = require('@swatch/red/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/red`.

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

Exported as properties when importing `@swatches/red/string`.

- `rgb`
- `hsl`
- `hex`
