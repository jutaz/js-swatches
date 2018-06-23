## Various exports of the coral color

This package contains already statically computed variants of the coral color.

Usage:
```js
const {rgb, hex} = require('@swatches/coral');

// Use `rgb`, `hex` to show coral in your application.
```

In the browser:
```js
const {hex} = require('@swatch/coral/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/coral`.

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

Exported as properties when importing `@swatches/coral/string`.

- `rgb`
- `hsl`
- `hex`
