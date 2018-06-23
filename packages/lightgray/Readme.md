## Various exports of the lightgray color

This package contains already statically computed variants of the lightgray color.

Usage:
```js
const {rgb, hex} = require('@swatches/lightgray');

// Use `rgb`, `hex` to show lightgray in your application.
```

In the browser:
```js
const {hex} = require('@swatch/lightgray/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/lightgray`.

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

Exported as properties when importing `@swatches/lightgray/string`.

- `rgb`
- `hsl`
- `hex`
