## Various exports of the thistle color

This package contains already statically computed variants of the thistle color.

Usage:
```js
const {rgb, hex} = require('@swatches/thistle');

// Use `rgb`, `hex` to show thistle in your application.
```

In the browser:
```js
const {hex} = require('@swatch/thistle/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/thistle`.

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

Exported as properties when importing `@swatches/thistle/string`.

- `rgb`
- `hsl`
- `hex`
