/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ProductVariantSelector} from '../my-element.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('my-element', () => {
  test('is defined', () => {
    const el = document.createElement('product-variant-selector');
    assert.instanceOf(el, ProductVariantSelector);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<my-element></my-element>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });
});
