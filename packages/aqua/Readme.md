## Various exports of the aqua color

This package contains already statically computed variants of the aqua color.

Usage:
```js
const {rgb, hex} = require('@swatches/aqua');

// Use `rgb`, `hex` to show aqua in your application.
```

In the browser:
```js
const {hex} = require('@swatch/aqua/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/aqua`.

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

Exported as properties when importing `@swatches/aqua/string`.

- `rgb`
- `hsl`
- `hex`
