import { html } from 'lit';
import { TapIcon } from '../../icon';

export class GasStationIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_24_1210)">
          <path
            d="M4 21V5C4 4.45 4.19583 3.97917 4.5875 3.5875C4.97917 3.19583 5.45 3 6 3H12C12.55 3 13.0208 3.19583 13.4125 3.5875C13.8042 3.97917 14 4.45 14 5V12H15C15.55 12 16.0208 12.1958 16.4125 12.5875C16.8042 12.9792 17 13.45 17 14V18.5C17 18.7833 17.0958 19.0208 17.2875 19.2125C17.4792 19.4042 17.7167 19.5 18 19.5C18.2833 19.5 18.5208 19.4042 18.7125 19.2125C18.9042 19.0208 19 18.7833 19 18.5V11.3C18.85 11.3833 18.6917 11.4375 18.525 11.4625C18.3583 11.4875 18.1833 11.5 18 11.5C17.3 11.5 16.7083 11.2583 16.225 10.775C15.7417 10.2917 15.5 9.7 15.5 9C15.5 8.46667 15.6458 7.9875 15.9375 7.5625C16.2292 7.1375 16.6167 6.83333 17.1 6.65L15 4.55L16.05 3.5L19.75 7.1C20 7.35 20.1875 7.64167 20.3125 7.975C20.4375 8.30833 20.5 8.65 20.5 9V18.5C20.5 19.2 20.2583 19.7917 19.775 20.275C19.2917 20.7583 18.7 21 18 21C17.3 21 16.7083 20.7583 16.225 20.275C15.7417 19.7917 15.5 19.2 15.5 18.5V13.5H14V21H4ZM6 10H12V5H6V10ZM18 10C18.2833 10 18.5208 9.90417 18.7125 9.7125C18.9042 9.52083 19 9.28333 19 9C19 8.71667 18.9042 8.47917 18.7125 8.2875C18.5208 8.09583 18.2833 8 18 8C17.7167 8 17.4792 8.09583 17.2875 8.2875C17.0958 8.47917 17 8.71667 17 9C17 9.28333 17.0958 9.52083 17.2875 9.7125C17.4792 9.90417 17.7167 10 18 10ZM6 19H12V12H6V19Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_24_1210">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `);
  }
}
