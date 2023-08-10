"use client";
import React from 'react'
import Image from 'next/image'
import {signOut, signIn, useSession } from 'next-auth/react'


export default function GoogleSignupOption() {
  const { data:session } = useSession();

  if(session && session.user) {
    return (
      <div>
        <p>Google signed in as{session.user.email}</p>
        <button onClick={() => signOut({callbackUrl:'localhost:3000'})}>Sign Out</button>
      </div>
    )
  }
  

  return (
    // <div>
    //   <button onClick={() => signIn("google",{callbackUrl:'localhost:3000'})}>Sign In</button>
    // </div>

    <div className='flex items-center justify-center mt-[1rem]'>
      <div 
        className='flex justify-center items-center sm:w-[21.563rem] sm:h-[3.375rem] bg-white rounded-xl cursor-pointer'
        onClick={() => signIn('google',{callbackUrl:'http://localhost:3000/Sign-up'})}
      >
        <Image
          src={'/google_icon.png'}
          width={24}
          height={24}
          alt='Google Icon'
        />
        <span
          className='ml-[25px] cursor-pointer'
        >
          Sign in with Google
        </span>
      </div>
    </div>
  )
}
