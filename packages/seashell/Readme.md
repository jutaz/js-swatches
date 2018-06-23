## Various exports of the seashell color

This package contains already statically computed variants of the seashell color.

Usage:
```js
const {rgb, hex} = require('@swatches/seashell');

// Use `rgb`, `hex` to show seashell in your application.
```

In the browser:
```js
const {hex} = require('@swatch/seashell/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/seashell`.

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

Exported as properties when importing `@swatches/seashell/string`.

- `rgb`
- `hsl`
- `hex`
