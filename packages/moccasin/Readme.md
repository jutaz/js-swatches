## Various exports of the moccasin color

This package contains already statically computed variants of the moccasin color.

Usage:
```js
const {rgb, hex} = require('@swatches/moccasin');

// Use `rgb`, `hex` to show moccasin in your application.
```

In the browser:
```js
const {hex} = require('@swatch/moccasin/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/moccasin`.

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

Exported as properties when importing `@swatches/moccasin/string`.

- `rgb`
- `hsl`
- `hex`
