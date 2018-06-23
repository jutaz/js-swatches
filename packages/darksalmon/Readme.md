## Various exports of the darksalmon color

This package contains already statically computed variants of the darksalmon color.

Usage:
```js
const {rgb, hex} = require('@swatches/darksalmon');

// Use `rgb`, `hex` to show darksalmon in your application.
```

In the browser:
```js
const {hex} = require('@swatch/darksalmon/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/darksalmon`.

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

Exported as properties when importing `@swatches/darksalmon/string`.

- `rgb`
- `hsl`
- `hex`
