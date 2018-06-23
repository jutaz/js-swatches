## Various exports of the snow color

This package contains already statically computed variants of the snow color.

Usage:
```js
const {rgb, hex} = require('@swatches/snow');

// Use `rgb`, `hex` to show snow in your application.
```

In the browser:
```js
const {hex} = require('@swatch/snow/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/snow`.

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

Exported as properties when importing `@swatches/snow/string`.

- `rgb`
- `hsl`
- `hex`
