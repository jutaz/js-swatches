## Various exports of the bisque color

This package contains already statically computed variants of the bisque color.

Usage:
```js
const {rgb, hex} = require('@swatches/bisque');

// Use `rgb`, `hex` to show bisque in your application.
```

In the browser:
```js
const {hex} = require('@swatch/bisque/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/bisque`.

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

Exported as properties when importing `@swatches/bisque/string`.

- `rgb`
- `hsl`
- `hex`
