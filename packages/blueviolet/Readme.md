## Various exports of the blueviolet color

This package contains already statically computed variants of the blueviolet color.

Usage:
```js
const {rgb, hex} = require('@swatches/blueviolet');

// Use `rgb`, `hex` to show blueviolet in your application.
```

In the browser:
```js
const {hex} = require('@swatch/blueviolet/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/blueviolet`.

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

Exported as properties when importing `@swatches/blueviolet/string`.

- `rgb`
- `hsl`
- `hex`
