## Various exports of the gray color

This package contains already statically computed variants of the gray color.

Usage:
```js
const {rgb, hex} = require('@swatches/gray');

// Use `rgb`, `hex` to show gray in your application.
```

In the browser:
```js
const {hex} = require('@swatch/gray/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/gray`.

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

Exported as properties when importing `@swatches/gray/string`.

- `rgb`
- `hsl`
- `hex`
