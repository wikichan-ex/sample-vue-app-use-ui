import { p as promiseResolve, b as bootstrapLazy } from './index-9062f02b.js';

/*
 Stencil Client Patch Esm v2.17.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["sample-stencil-test",[[1,"sample-stencil-test",{"text":[1]}]]]], options);
  });
};

export { defineCustomElements };
