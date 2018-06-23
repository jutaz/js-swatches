## Various exports of the orchid color

This package contains already statically computed variants of the orchid color.

Usage:
```js
const {rgb, hex} = require('@swatches/orchid');

// Use `rgb`, `hex` to show orchid in your application.
```

In the browser:
```js
const {hex} = require('@swatch/orchid/string');

document.body.style.backgroundColor = hex;
```

## Supported formats


List of all supported color formats.

### As raw values

Exported as properties when importing `@swatches/orchid`.

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

Exported as properties when importing `@swatches/orchid/string`.

- `rgb`
- `hsl`
- `hex`
