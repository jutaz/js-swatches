## Various exports of the firebrick color

This package contains already statically computed variants of the firebrick color.

Usage:
```js
const {rgb, hex} = require('@swatches/firebrick');

// Use `rgb`, `hex` to show firebrick in your application.
```

In the browser:
```js
const {hex} = require('@swatch/firebrick/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/firebrick`.

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

Exported as properties when importing `@swatches/firebrick/string`.

- `rgb`
- `hsl`
- `hex`
