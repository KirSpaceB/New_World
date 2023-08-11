"use client"
import React from 'react'
import { dm_Serif_Display_italic } from '@/app/Fonts/DM_Serif_Display';
import { Roboto_Font } from '../Fonts/Roboto';
import GoogleSignupOption from '../Sign-up/GoogleSignupOption';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function page() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e:React.FormEvent) => {

    e.preventDefault();
    const apiForLogin = await fetch("/api/login", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password})
    });
    
    if(apiForLogin.ok === true) {
      router.push('/')
    } else {
      alert("Wrong username password or user does not exsist")
    }
  }

  return (
    <div className={dm_Serif_Display_italic.className} id='login_parent div'>
      <div className='flex'>
        <div className='flex flex-col flex-1 justify-center items-center' style={{
          backgroundColor: "#98754F"
        }}>

          <div className={dm_Serif_Display_italic.className}>
            <div className='flex items-center justify-center'>
              <h1 className='text-6xl'>Welcome back!</h1>
            </div>

            <GoogleSignupOption/>

          </div>
          <div className='items-center justify-center' id='login_left_side_ui_div'>
            <form 
              className='flex flex-col justify-center items-center mt-[4rem]'
              id='username_password login'
              onSubmit={handleLogin}
              >
              <input 
                className='sm:w-[21.563rem] sm:h-[3.375rem] rounded-xl bg-white p-5'
                type='text'
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                className='sm:w-[21.563rem] sm:h-[3.375rem] rounded-xl bg-white mt-[2rem] p-5'
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                <div className='flex justify-center items-end mt-[2px] sm:ml-[220px]'>
                  <a href="">Forgot password</a>
                </div>
              <div className={Roboto_Font.className}>
                <div className='flex justify-center itmes-center'>
                  <div 
                    className='flex justify-center items-center bg-black sm:w-[230px] sm:h-[54px] rounded-full mt-[25px]'>
                    <button type='submit' className='text-white text-4xl'>Login</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div 
          className='flex-1 min-h-screen relative' 
          style={{
            backgroundImage: `url('/login_page_pic.png')`,
            backgroundSize: 'cover', // Changed from 'fit' to 'cover'
            backgroundPosition: 'center', // Center the background image
          }}
          >
        </div>
      </div>
    </div>
  )
}