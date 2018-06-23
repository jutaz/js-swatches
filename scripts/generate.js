const fs = require('fs'),
      colors = require('color-name');
      mkdirp = require('mkdirp'),
      colorConvert = require('color-convert');

function getPackageJson(version, name) {
  return `{
  "name": "@swatch/${name}",
  "version": "1.0.0",
  "description": "JS package for '${name}' color",
  "main": "index.js",
  "private": false,
  "keywords": [
    "color",
    "swatch",
    "${name}"
  ],
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/jutaz/js-swatches.git"
  },
  "bugs": {
    "url": "https://github.com/jutaz/js-swatches/issues"
  },
  "homepage": "https://github.com/jutaz/js-swatches/tree/master/packages/${name}",
  "author": "Justas Brazauskas",
  "license": "ISC"
}
`
}

function getScriptTemplate (name) {
  const generated = {
          name,
          keyword: colorConvert.rgb.keyword(colors[name]),

          rgb: colors[name],
          hsl: colorConvert.rgb.hsl(colors[name]),
          hsv: colorConvert.rgb.hsv(colors[name]),
          hwb: colorConvert.rgb.hwb(colors[name]),
          cmyk: colorConvert.rgb.cmyk(colors[name]),
          xyz: colorConvert.rgb.xyz(colors[name]),
          lab: colorConvert.rgb.lab(colors[name]),
          lch: colorConvert.rgb.lch(colors[name]),
          hex: colorConvert.rgb.hex(colors[name]),
          ansi16: colorConvert.rgb.ansi16(colors[name]),
          ansi256: colorConvert.rgb.ansi256(colors[name]),
          hcg: colorConvert.rgb.hcg(colors[name]),
          apple: colorConvert.rgb.apple(colors[name]),
          gray: colorConvert.rgb.gray(colors[name])
        };

  return `module.exports = ${JSON.stringify(generated, null, 2)}\n`
}

function getStringVersionTemplate (name) {
  const hsl = colorConvert.rgb.hsl(colors[name]);
  const generated = {
          name,
          keyword: colorConvert.rgb.keyword(colors[name]),

          rgb: `rgb(${colors[name].join(', ')})`,
          hsl: `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`,

          hex: `#${colorConvert.rgb.hex(colors[name])}`
        };

  return `module.exports = ${JSON.stringify(generated, null, 2)}\n`
}


Object.keys(colors).forEach((name) => {
  const dir = `${__dirname}/../packages/${name}`;
  mkdirp.sync(dir);
  fs.writeFileSync(`${dir}/package.json`, getPackageJson('1.0.0', name));
  fs.writeFileSync(`${dir}/index.js`, getScriptTemplate(name));
  fs.writeFileSync(`${dir}/string.js`, getStringVersionTemplate(name));
});
