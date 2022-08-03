import { Component, Prop, h } from '@stencil/core';
export class SampleStencilTest {
  getText() {
    return this.text;
  }
  render() {
    return h("div", null,
      "Sample Stencil Component: ",
      this.getText());
  }
  static get is() { return "sample-stencil-test"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sample-stencil-test.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sample-stencil-test.css"]
  }; }
  static get properties() { return {
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false
    }
  }; }
}
