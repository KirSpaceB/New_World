import React from 'react'
import Image from 'next/image'
export default function GoogleSignupOption() {
  return (
    <div className='flex items-center justify-center mt-[1rem]'>
    <div className='flex justify-center items-center sm:w-[21.563rem] sm:h-[3.375rem] bg-white rounded-xl'>
      <Image
        src={'/google_icon.png'}
        width={24}
        height={24}
        alt='Google Icon'
      />
      <span className='ml-[25px]'>
        Sign in with Google
      </span>
    </div>
  </div>
  )
}
