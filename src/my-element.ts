import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';
import {customElement, property} from 'lit/decorators.js';

type Product = {
  title: string;
  body_html: string;
  image: {
    src: string;
    alt: string;
  };
  variants: {id: number; title: string}[];
};

@customElement('product-variant-selector')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px #777;
      border-radius: 8px;
      padding: 16px;
      font-family: Sans-serif;
      height: 260px;
      width: 460px;
    }

    h1 {
      font-size: 18px;
    }

    .wrapper {
      display: flex;
      gap: 24px;
    }

    a:link,
    a:visited {
      background-color: #5a31f4;
      color: white;
      padding: 14px 25px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      border-radius: 4px;
    }

    a:hover,
    a:active {
      background-color: #3c0def;
      cursor: pointer;
    }

    select {
      font-size: 18px;
      width: 100%;
    }

    a {
      width: 100%;
      box-sizing: border-box;
    }

    .description {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  `;

  @property() imageHeight = 250;
  @property() imageWidth = 200;
  @property() productUrl?: string;

  private shopPayUrl?: string;
  @property({type: Number}) private selectedVariantId?: number;

  private _productTask = new Task(this, {
    task: async ([productUrl], {signal}) => {
      if (!productUrl) {
        throw new Error('productUrl is not set');
      }
      const response = await fetch(productUrl, {
        signal,
      });

      if (!response.ok) {
        throw new Error('Error fetching product data: ' + response.status);
      }
      const json = await response.json();
      return json.product as Product;
    },
    args: () => [this.productUrl],
  });

  override render() {
    if (this.productUrl) {
      this.shopPayUrl = `${new URL(this.productUrl).origin}/cart/`;
    }

    return this._productTask.render({
      pending: () => html`<p>Loading product...</p>`,
      complete: (product) => html`
        <div class="wrapper">
          ${this.renderImage(product)}
          <div>
            <h1>${product.title}</h1>
            <p class="description">${product.body_html}</p>
            <p>${this.renderProductOptions(product)}</p>
            <p>${this.renderBuyNow(product)}</p>
          </div>
        </div>
      `,
      error: (e) => html`<p>Error: ${e}</p>`,
    });
  }

  renderImage(product: Product) {
    return html`<img
      width="${this.imageWidth}"
      height="${this.imageHeight}"
      src="${product.image.src}&width=${this.imageWidth}&height=${this
        .imageHeight}&crop=center"
      alt="${product.image.alt}"
    />`;
  }

  renderBuyNow(product: Product) {
    const variants = product.variants;

    if (variants.length === 1) {
      return html`<a href="${this.shopPayUrl}${variants[0].id}:1?payment=shop_pay">Buy now</button>`;
    } else if (this.selectedVariantId) {
      return html`<a href="${this.shopPayUrl}${this.selectedVariantId}:1?payment=shop_pay">Buy now</button>`;
    }

    return null;
  }

  renderProductOptions(product: Product) {
    const variants = product.variants;

    if (variants.length >= 1) {
      return html`<select @change="${this._setSelectedVariant}">
        <option value="">Select a variant</option>
        ${variants.map(
          (variant) =>
            html`<option value="${variant.id}">${variant.title}</option>`
        )}
      </select>`;
    }

    return null;
  }

  _setSelectedVariant(e: Event) {
    this.selectedVariantId = parseInt(
      (e.target as HTMLSelectElement).value,
      10
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'product-variant-selector': MyElement;
  }
}
