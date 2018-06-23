## Various exports of the oldlace color

This package contains already statically computed variants of the oldlace color.

Usage:
```js
const {rgb, hex} = require('@swatches/oldlace');

// Use `rgb`, `hex` to show oldlace in your application.
```

In the browser:
```js
const {hex} = require('@swatch/oldlace/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/oldlace`.

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

Exported as properties when importing `@swatches/oldlace/string`.

- `rgb`
- `hsl`
- `hex`
