import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const sampleStencilTestCss = ":host{display:block;background-color:aquamarine}";

const SampleStencilTest$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getText() {
    return this.text;
  }
  render() {
    return h("div", null, "Sample Stencil Component: ", this.getText());
  }
  static get style() { return sampleStencilTestCss; }
}, [1, "sample-stencil-test", {
    "text": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["sample-stencil-test"];
  components.forEach(tagName => { switch (tagName) {
    case "sample-stencil-test":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SampleStencilTest$1);
      }
      break;
  } });
}

const SampleStencilTest = SampleStencilTest$1;
const defineCustomElement = defineCustomElement$1;

export { SampleStencilTest, defineCustomElement };
