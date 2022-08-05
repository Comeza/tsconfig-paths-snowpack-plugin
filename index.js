import {readFileSync} from 'fs';
import {join, resolve} from 'path';
import stripJsonComments from 'strip-json-comments';

const readFileAsJson = (file) => JSON.parse(stripJsonComments(readFileSync(file).toString()));
const replacePathEnd = (path) => (path.endsWith('/*') ? path.slice(0, -2) : path);

export default function (snowpackConfig, pluginOptions) {
  const tsconfig = readFileAsJson(join(snowpackConfig.root, 'tsconfig.json'));
  const compilerOptions = tsconfig.compilerOptions;
  const baseUrl = compilerOptions?.baseUrl ?? '';

  if (baseUrl.endsWith('/')) baseUrl += '/';

  const mappedPaths = Object.entries(compilerOptions.paths)
    .map(([key, val]) => ({
      [replacePathEnd(key)]: resolve(snowpackConfig.root, baseUrl + replacePathEnd(val[0])),
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }));

  snowpackConfig.alias = { ...mappedPaths, ...snowpackConfig.alias };

  if (pluginOptions?.logAlias) console.log('snowpackConfig.alias', snowpackConfig.alias);

  return {
    name: 'tsconfig-paths-snowpack-plugin',
  };
};
