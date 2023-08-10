"use client"
import React, { useState } from 'react';
import { signIn,signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { Roboto_Font } from '../Fonts/Roboto';
import { useRouter } from 'next/navigation';

export default function CredentialSignUp() {
  const { data: session } = useSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSignIn = async (e:React.FormEvent) => {
      e.preventDefault(); // Prevent default form submission behavior
      console.log(username,password)
      // Sign in using the credentials provider
      const result = await fetch("./api/signup", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body:JSON.stringify({username, password}),
      });
      console.log(result)
      if(result.ok === true) {
        console.log('if statement return true')
        router.push('/')
      }

  };

  if (session && session.user) {
    return (
      <div>
        <p>Signed in as {session.user.name}</p>
        <button
          onClick={() => signOut({callbackUrl:"http://localhost:3000/Sign-up"})}>Sign Out
        </button>
      </div>
    );
  }

  return (
    <form className='flex flex-col justify-center items-center mt-[4rem]' onSubmit={handleSignIn}>
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
            <button type='submit' className='text-white text-4xl'>Sign Up</button>
          </div>
        </div>
      </div>
    </form>
  )
}
