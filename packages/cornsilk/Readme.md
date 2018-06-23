## Various exports of the cornsilk color

This package contains already statically computed variants of the cornsilk color.

Usage:
```js
const {rgb, hex} = require('@swatches/cornsilk');

// Use `rgb`, `hex` to show cornsilk in your application.
```

In the browser:
```js
const {hex} = require('@swatch/cornsilk/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/cornsilk`.

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

Exported as properties when importing `@swatches/cornsilk/string`.

- `rgb`
- `hsl`
- `hex`
