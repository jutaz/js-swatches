## Various exports of the deeppink color

This package contains already statically computed variants of the deeppink color.

Usage:
```js
const {rgb, hex} = require('@swatches/deeppink');

// Use `rgb`, `hex` to show deeppink in your application.
```

In the browser:
```js
const {hex} = require('@swatch/deeppink/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/deeppink`.

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

Exported as properties when importing `@swatches/deeppink/string`.

- `rgb`
- `hsl`
- `hex`
