# tsconfig-paths-snowpack-plugin

## Description
This is a simple plugin that will use the paths you have defined in your tsconfig.json in your snowpack configuration.

### Disclaimer
I would recommend to use another pugin, since this is the first npm package that I have published. And I can't guarantee that it will work in every usecase.

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


## Contribution
If you have ideas to improve the project, feel free to do so.

## Todo
- [x] Basic proof of concept
- [ ] Rework the path parsing
- [ ] Error output
- [ ] Options for advanced path parsing