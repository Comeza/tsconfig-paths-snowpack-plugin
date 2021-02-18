# tsconfig-paths-snowpack-plugin

## Description
This is a simple plugin that will use the paths you defined in your tsconfig.json in your snowpack configuration.

## Usage

snowpack.config.json
```
"plugins": [
  ["tsconfig-paths-snowpack-plugin", {/* See Options */}],
],
```

tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@app/*": ["src/*"]
    },
  }
}
```

will be converted at build time into:

snowpack.config.js
```js
module.exports = {
  alias: {
    "@app": "src"
  }
}
```

## Options
| Field      | Type    | Required | Description                                                        |
|------------|---------|----------|--------------------------------------------------------------------|
| `logAlias` | Boolean | No       | This will print the modified alias of your snowpack configuration. Keep in mind that you have to set `devOptions: { output: 'stream' } ` in your `snowpack.config.js` to prevent snowpack from clearing the console. |