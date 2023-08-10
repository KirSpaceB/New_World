'use client'
import React from 'react';
import { dm_Serif_Display_italic } from '@/app/Fonts/DM_Serif_Display';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function LandingPageNav() {


  return (
    <div className={dm_Serif_Display_italic.className}>
      <div>
        <ul className='flex flex-row space-x-10 items-center'>
          <li id='NW_Logo' className='text-6xl inline-block mt-10'>
            NW
          </li>
          <li className='text-xl inline-block mt-10' >
            <Link href="/ProductPage">
              Product
            </Link>
          </li>
          <li className='text-xl inline-block mt-10'>
            About
          </li>
          <li className='text-xl inline-block mt-10'>
            Plans
          </li>
          <li className='text-xl inline-block mt-10'>
            <button onClick={() => signIn()}>
              Sign-up
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
