## Various exports of the chocolate color

This package contains already statically computed variants of the chocolate color.

Usage:
```js
const {rgb, hex} = require('@swatches/chocolate');

// Use `rgb`, `hex` to show chocolate in your application.
```

In the browser:
```js
const {hex} = require('@swatch/chocolate/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/chocolate`.

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

Exported as properties when importing `@swatches/chocolate/string`.

- `rgb`
- `hsl`
- `hex`
