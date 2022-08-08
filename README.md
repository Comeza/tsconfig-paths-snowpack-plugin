# tsconfig-paths-snowpack-plugin

[![npm package](https://nodei.co/npm/tsconfig-paths-snowpack-plugin.png?downloads=true&downloadRank=true)](https://nodei.co/npm/tsconfig-paths-snowpack-plugin/)

## Description
This is a simple plugin that will use the paths you have defined in your tsconfig.json in your snowpack configuration.

### Disclaimer
I would recommend to use another pugin (see [alternatives](#Alternatives)), since this is the first npm package
that I have published. And I can't guarantee that it will work in every
usecase.

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
| `logAlias` | bool    | No       | This will print the modified alias of your snowpack configuration. Keep in mind that you have to set `devOptions: { output: 'stream' } ` in your `snowpack.config.js` to prevent snowpack from clearing the console. |


## Contribution
If you have any ideas to improve the project, feel free to do so.


## Alternatives
- [@nxtensions/tsconfig-paths-snowpack-plugin](https://github.com/nxtensions/nxtensions/tree/main/packages/tsconfig-paths-snowpack-plugin)
- I also recommend [viteJs](https://vitejs.dev) and its plugin: [aleclarson/vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)
