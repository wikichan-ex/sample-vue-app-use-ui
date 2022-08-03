import { r as registerInstance, h } from './index-9062f02b.js';

const sampleStencilTestCss = ":host{display:block;background-color:aquamarine}";

const SampleStencilTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return this.text;
  }
  render() {
    return h("div", null, "Sample Stencil Component: ", this.getText());
  }
};
SampleStencilTest.style = sampleStencilTestCss;

export { SampleStencilTest as sample_stencil_test };
