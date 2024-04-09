import { Component } from '@angular/core';

@Component({
  selector: 'library-icon',
  template: `<svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    class="style-scope yt-icon"
    style="pointer-events: none; display: block; width: 24px; height: 24px;stroke:var(--main-text-color)"
  >
    <g class="style-scope yt-icon">
      <path
        d="M16,6v2h-2v5c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.37,0,0.7,0.11,1,0.28V6H16z M18,20H4V6H3v15h15V20z M21,3H6v15h15V3z M7,4h13v13H7V4z"
        class="style-scope yt-icon"
      ></path>
    </g>
  </svg>`,
})
export class LibraryIcon {}
