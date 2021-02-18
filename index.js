const fs = require('fs');
const path = require('path');
const stripJsonComments = require('strip-json-comments');

const readFileAsJson = (file) => JSON.parse(stripJsonComments(fs.readFileSync(file).toString()));
const replacePathEnd = (path) => (path.endsWith('/*') ? path.slice(0, -2) : path);

module.exports = function (snowpackConfig, pluginOptions) {
  let tsconfig = readFileAsJson(path.join(snowpackConfig.root, 'tsconfig.json'));
  let compilerOptions = tsconfig.compilerOptions;
  let baseUrl = compilerOptions?.baseUrl ?? '';
  if (baseUrl.endsWith('/')) baseUrl += '/';

  let mappedPaths = Object.entries(compilerOptions.paths)
    .map(([key, val]) => ({
      [replacePathEnd(key)]: path.resolve(snowpackConfig.root, baseUrl + replacePathEnd(val[0])),
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }));

  snowpackConfig.alias = { ...mappedPaths, ...snowpackConfig.alias };

  if (pluginOptions?.logAlias) console.log('snowpackConfig.alias', snowpackConfig.alias);

  return {
    name: 'tsconfig-paths-snowpack-plugin',
  };
};
