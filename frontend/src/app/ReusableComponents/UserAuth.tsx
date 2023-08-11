import React from 'react'
import { dm_Serif_Display_italic } from '../Fonts/DM_Serif_Display'
import GoogleSignupOption from '../Sign-up/GoogleSignupOption';
import { Roboto_Font } from '../Fonts/Roboto';
interface IUserAuthProps {
  username: string;
  password: string;
  authType:string;
  setUsername: (value:string) => void;
  setPassword: (value:string) => void;
  handleAuth: (e:React.FormEvent) => void
}

export default function UserAuth({username,password,authType,setUsername, setPassword, handleAuth}:IUserAuthProps) {
  return (
    <form 
      className='flex flex-col justify-center items-center mt-[4rem]'
      id='username_password login'
      onSubmit={handleAuth}
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
            <button type='submit' className='text-white text-4xl'>{authType}</button>
          </div>
        </div>
      </div>
    </form>
  )
}
