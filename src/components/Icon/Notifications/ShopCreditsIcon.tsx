import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

/**
 * The Shop's credits mark (the hexagonal "C" of `Icon/CreditsIcon`) on a purple badge, for notifications about Shop
 * credits. `CreditsIcon` in this folder is the retired season credits artwork, kept for the season notifications.
 */
const ShopCreditsIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="url(#shop_credits_icon_gradient)" />
        <g transform="translate(12 11.4) scale(1.2)">
          <path
            d="M13.1318 0.891714L18.5 6.29015V14.0226L13.125 19.5831H6.26758L0.891602 14.0216V6.29113L6.26074 0.891714H13.1318Z"
            stroke="white"
            strokeWidth="1.78379"
            fill="none"
          />
          <path
            d="M7.81758 5.13837C8.7606 4.70684 9.80743 4.55428 10.8344 4.69871C11.8613 4.84315 12.8255 5.27853 13.6129 5.95344L12.0562 7.76966C11.6155 7.39196 11.076 7.1483 10.5012 7.06747C9.92652 6.98664 9.34068 7.07201 8.81294 7.31351C8.28519 7.555 7.8376 7.94253 7.52307 8.43029C7.20854 8.91805 7.0402 9.48566 7.03796 10.066C7.03572 10.6464 7.19967 11.2153 7.51042 11.7054C7.82117 12.1956 8.26576 12.5866 8.79162 12.8322C9.31748 13.0777 9.90265 13.1676 10.478 13.0912C11.0533 13.0148 11.5947 12.7753 12.0383 12.4011L13.581 14.2293C12.7884 14.8981 11.8209 15.326 10.7928 15.4625C9.7648 15.599 8.71916 15.4384 7.7795 14.9996C6.83984 14.5608 6.04542 13.8621 5.49014 12.9863C4.93485 12.1104 4.64191 11.0938 4.64592 10.0568C4.64992 9.01972 4.95071 8.00549 5.51274 7.13393C6.07478 6.26236 6.87456 5.5699 7.81758 5.13837Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient id="shop_credits_icon_gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A524B3" />
            <stop offset="1" stopColor="#4B0F78" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { ShopCreditsIcon }
