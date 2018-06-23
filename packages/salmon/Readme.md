## Various exports of the salmon color

This package contains already statically computed variants of the salmon color.

Usage:
```js
const {rgb, hex} = require('@swatches/salmon');

// Use `rgb`, `hex` to show salmon in your application.
```

In the browser:
```js
const {hex} = require('@swatch/salmon/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/salmon`.

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

Exported as properties when importing `@swatches/salmon/string`.

- `rgb`
- `hsl`
- `hex`
