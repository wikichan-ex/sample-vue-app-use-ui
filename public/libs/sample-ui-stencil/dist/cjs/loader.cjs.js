'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0791f597.js');

/*
 Stencil Client Patch Esm v2.17.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["sample-stencil-test.cjs",[[1,"sample-stencil-test",{"text":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
