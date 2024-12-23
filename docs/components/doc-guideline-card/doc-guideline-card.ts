import { html, LitElement, nothing } from "lit";
import { property } from "lit/decorators.js";

export class GuidelineCard extends LitElement {
  @property({ attribute: "image-url" })
  public imageUrl? = "";

  @property()
  public variant?: "do" | "dont" | "caution";

  private _renderBadge() {
    const badgeConfig = {
      do: {
        title: "Do",
        class: "do",
      },
      dont: {
        title: "Don't",
        class: "dont",
      },
      caution: {
        title: "Caution",
        class: "caution",
      },
    };

    if (this.variant && Object.keys(badgeConfig).includes(this.variant)) {
      const selectedBadge = badgeConfig[this.variant];

      return html`<div class="badge ${selectedBadge.class}">
        ${selectedBadge.title}
      </div>`;
    }

    return nothing;
  }

  protected override render() {
    return html`
      <div
        part="guideline-card"
        class="guideline-card "
      >
        <div class="image">
          <slot name="card-image"></slot>
        </div>
        ${this._renderBadge()}
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
