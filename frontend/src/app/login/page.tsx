import React from 'react'
import { dm_Serif_Display_italic } from '@/app/Fonts/DM_Serif_Display';
export default function page() {
  return (
    <div className={dm_Serif_Display_italic.className}>
      <div className='flex'>
        <div className='flex-1'>
          test1
        </div>

        <div 
          className='flex-1 min-h-screen relative' 
          style={{
            backgroundImage: `url('/hand_with_bubbles.jpeg')`,
            backgroundSize: 'cover', // Changed from 'fit' to 'cover'
            backgroundPosition: 'center', // Center the background image

          }}
          >
          test2

        </div>
      </div>
    </div>
  )
}