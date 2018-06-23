## Various exports of the fuchsia color

This package contains already statically computed variants of the fuchsia color.

Usage:
```js
const {rgb, hex} = require('@swatches/fuchsia');

// Use `rgb`, `hex` to show fuchsia in your application.
```

In the browser:
```js
const {hex} = require('@swatch/fuchsia/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/fuchsia`.

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

Exported as properties when importing `@swatches/fuchsia/string`.

- `rgb`
- `hsl`
- `hex`
