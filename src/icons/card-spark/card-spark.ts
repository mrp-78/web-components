import { html } from 'lit';
import { TapIcon } from '../../icon';

export class CardSparkIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_24_1049)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.454 12.202L17.526 12.204C17.593 12.2134 17.6549 12.2452 17.7015 12.2942C17.7482 12.3433 17.7769 12.4066 17.783 12.474L17.781 12.544L17.286 16H19.48C19.5151 15.9999 19.55 16.006 19.583 16.018L19.63 16.04C19.6887 16.0739 19.7341 16.1266 19.759 16.1896C19.7839 16.2526 19.7867 16.3222 19.767 16.387L19.74 16.45L16.728 21.658C16.6962 21.7134 16.6476 21.7571 16.5892 21.783C16.5308 21.8088 16.4657 21.8153 16.4034 21.8016C16.341 21.7879 16.2847 21.7546 16.2425 21.7067C16.2004 21.6587 16.1746 21.5986 16.169 21.535L16.171 21.465L16.665 18.009H14.472C14.4369 18.0091 14.402 18.003 14.369 17.991L14.322 17.969C14.2633 17.9351 14.2179 17.8824 14.193 17.8194C14.1681 17.7564 14.1653 17.6868 14.185 17.622L14.212 17.559L17.224 12.351C17.2477 12.3097 17.281 12.2746 17.321 12.2487C17.361 12.2228 17.4066 12.2068 17.454 12.202ZM20 4C20.5046 3.99984 20.9906 4.19041 21.3605 4.5335C21.7305 4.87659 21.9572 5.34684 21.995 5.85L22 6V13H20V11H4V18H13V20H4C3.49542 20.0002 3.00943 19.8096 2.63945 19.4665C2.26947 19.1234 2.04284 18.6532 2.005 18.15L2 18V6C1.99984 5.49542 2.19041 5.00943 2.5335 4.63945C2.87659 4.26947 3.34684 4.04284 3.85 4.005L4 4H20ZM10 13V15H6V13H10ZM20 6H4V9H20V6Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_24_1049">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `);
  }
}
