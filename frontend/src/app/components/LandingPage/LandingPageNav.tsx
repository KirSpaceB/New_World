import React from 'react';
import { DM_Serif_Display } from "next/font/google";

const dm_Serif_Display = DM_Serif_Display({
  weight:'400',
  style:['normal', 'italic'],
  subsets:['latin']
});

export default function LandingPageNav() {
  return (
    <div className={dm_Serif_Display.className}>
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
