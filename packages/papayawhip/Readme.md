## Various exports of the papayawhip color

This package contains already statically computed variants of the papayawhip color.

Usage:
```js
const {rgb, hex} = require('@swatches/papayawhip');

// Use `rgb`, `hex` to show papayawhip in your application.
```

In the browser:
```js
const {hex} = require('@swatch/papayawhip/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/papayawhip`.

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

Exported as properties when importing `@swatches/papayawhip/string`.

- `rgb`
- `hsl`
- `hex`
