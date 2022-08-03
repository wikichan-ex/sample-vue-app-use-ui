'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0791f597.js');

const sampleStencilTestCss = ":host{display:block;background-color:aquamarine}";

const SampleStencilTest = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return this.text;
  }
  render() {
    return index.h("div", null, "Sample Stencil Component: ", this.getText());
  }
};
SampleStencilTest.style = sampleStencilTestCss;

exports.sample_stencil_test = SampleStencilTest;
