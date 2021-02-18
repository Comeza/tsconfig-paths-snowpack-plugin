# tsconfig-paths-snowpack-plugin

## Description
This is a simple plugin that will use the paths you defined in your tsconfig.json in your snowpack configuration.

## Usage

snowpack.config.json
```
plugins: [
  ['tsconfig-paths-snowpack-plugin', {/* See Options */}],
],
```
## Options
| Field      | Type    | Required | Description                                                        |
|------------|---------|----------|--------------------------------------------------------------------|
| `logAlias` | Boolean | No       | This will print the modified alias of your snowpack configuration. Keep in mind that you have to `devOptions: { output: 'stream' } ` to prevent snowpack from clearing the console. |