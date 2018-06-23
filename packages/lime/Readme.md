## Various exports of the lime color

This package contains already statically computed variants of the lime color.

Usage:
```js
const {rgb, hex} = require('@swatches/lime');

// Use `rgb`, `hex` to show lime in your application.
```

In the browser:
```js
const {hex} = require('@swatch/lime/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/lime`.

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

Exported as properties when importing `@swatches/lime/string`.

- `rgb`
- `hsl`
- `hex`
