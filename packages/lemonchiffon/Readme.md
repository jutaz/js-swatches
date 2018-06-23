## Various exports of the lemonchiffon color

This package contains already statically computed variants of the lemonchiffon color.

Usage:
```js
const {rgb, hex} = require('@swatches/lemonchiffon');

// Use `rgb`, `hex` to show lemonchiffon in your application.
```

In the browser:
```js
const {hex} = require('@swatch/lemonchiffon/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/lemonchiffon`.

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

Exported as properties when importing `@swatches/lemonchiffon/string`.

- `rgb`
- `hsl`
- `hex`
