## Various exports of the whitesmoke color

This package contains already statically computed variants of the whitesmoke color.

Usage:
```js
const {rgb, hex} = require('@swatches/whitesmoke');

// Use `rgb`, `hex` to show whitesmoke in your application.
```

In the browser:
```js
const {hex} = require('@swatch/whitesmoke/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/whitesmoke`.

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

Exported as properties when importing `@swatches/whitesmoke/string`.

- `rgb`
- `hsl`
- `hex`
