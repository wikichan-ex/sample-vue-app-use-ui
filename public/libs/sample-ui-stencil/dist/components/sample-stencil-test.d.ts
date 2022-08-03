import type { Components, JSX } from "../types/components";

interface SampleStencilTest extends Components.SampleStencilTest, HTMLElement {}
export const SampleStencilTest: {
  prototype: SampleStencilTest;
  new (): SampleStencilTest;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
