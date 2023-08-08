import React from 'react';
import { dm_Serif_Display_italic } from '@/app/Fonts/DM_Serif_Display';

export default function LandingPageNav() {
  return (
    <div className={dm_Serif_Display_italic.className}>
      <div>
        <ul className='flex flex-row space-x-10 items-center'>
          <li id='NW_Logo' className='text-6xl inline-block mt-10'>
            NW
          </li>
          <li className='text-xl inline-block mt-10'>
            Product
          </li>
          <li className='text-xl inline-block mt-10'>
            About
          </li>
          <li className='text-xl inline-block mt-10'>
            Plans
          </li>
        </ul>
      </div>
    </div>
  )
}
