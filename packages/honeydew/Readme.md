## Various exports of the honeydew color

This package contains already statically computed variants of the honeydew color.

Usage:
```js
const {rgb, hex} = require('@swatches/honeydew');

// Use `rgb`, `hex` to show honeydew in your application.
```

In the browser:
```js
const {hex} = require('@swatch/honeydew/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/honeydew`.

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

Exported as properties when importing `@swatches/honeydew/string`.

- `rgb`
- `hsl`
- `hex`
