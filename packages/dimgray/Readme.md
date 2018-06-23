## Various exports of the dimgray color

This package contains already statically computed variants of the dimgray color.

Usage:
```js
const {rgb, hex} = require('@swatches/dimgray');

// Use `rgb`, `hex` to show dimgray in your application.
```

In the browser:
```js
const {hex} = require('@swatch/dimgray/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/dimgray`.

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

Exported as properties when importing `@swatches/dimgray/string`.

- `rgb`
- `hsl`
- `hex`
