import React from 'react'
import { Roboto_Font } from '../Fonts/Roboto'
import { dm_Serif_Display_italic } from '../Fonts/DM_Serif_Display'
export default function page() {
  return (
    <div className={dm_Serif_Display_italic.className}>
      <div className='flex'>
        <div className='flex-1 min-h-screen' style={{
          backgroundImage: `url('/hands_grabbing_face 1.png')`,
          backgroundSize: 'cover', // Changed from 'fit' to 'cover'
          backgroundPosition: 'center', // Center the background image
        }}>
        </div>

        <div className='flex-1' style={{
          backgroundColor: '#D9B2AB'
        }}>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center mt-[10rem]'>
              <p className='text-4xl'>Hi There!</p>
              <p className='text-xl'>Welcome to New World.</p>
            </div>

            <div className='flex items-center justify-center mt-[1rem] '>
              <div className='flex justify-center items-center sm:w-[21.563rem] sm:h-[3.375rem] bg-white rounded-xl'>
                <img src="" alt="" />
                <span>Sign in with Google</span>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-[4rem]'>
              <input className='sm:w-[21.563rem] sm:h-[3.375rem] rounded-xl bg-white p-5' type='text' placeholder='username'>

              </input>
              <input className='sm:w-[21.563rem] sm:h-[3.375rem] rounded-xl bg-white mt-[2rem] p-5' type='text' placeholder='password'>
               
              </input>
            </div>

            <div className='flex justify-center items-end mt-[2px] sm:ml-[220px]'>
              <a href="">Forgot password</a>
            </div>

            <div className={Roboto_Font.className}>
              <div className='flex justify-center itmes-center'>
                <div 
                  className='flex justify-center items-center bg-black sm:w-[230px] sm:h-[54px] rounded-full mt-[25px]'>
                  <a href="" className='text-white text-4xl'>Sign Up</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
