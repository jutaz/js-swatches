## Various exports of the lightsalmon color

This package contains already statically computed variants of the lightsalmon color.

Usage:
```js
const {rgb, hex} = require('@swatches/lightsalmon');

// Use `rgb`, `hex` to show lightsalmon in your application.
```

In the browser:
```js
const {hex} = require('@swatch/lightsalmon/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/lightsalmon`.

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

Exported as properties when importing `@swatches/lightsalmon/string`.

- `rgb`
- `hsl`
- `hex`
