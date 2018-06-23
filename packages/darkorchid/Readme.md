## Various exports of the darkorchid color

This package contains already statically computed variants of the darkorchid color.

Usage:
```js
const {rgb, hex} = require('@swatches/darkorchid');

// Use `rgb`, `hex` to show darkorchid in your application.
```

In the browser:
```js
const {hex} = require('@swatch/darkorchid/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/darkorchid`.

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

Exported as properties when importing `@swatches/darkorchid/string`.

- `rgb`
- `hsl`
- `hex`
