## Various exports of the peachpuff color

This package contains already statically computed variants of the peachpuff color.

Usage:
```js
const {rgb, hex} = require('@swatches/peachpuff');

// Use `rgb`, `hex` to show peachpuff in your application.
```

In the browser:
```js
const {hex} = require('@swatch/peachpuff/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/peachpuff`.

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

Exported as properties when importing `@swatches/peachpuff/string`.

- `rgb`
- `hsl`
- `hex`
