"use client"
import React, { useState } from 'react';
import { signIn,signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function CredentialSignUp() {
  const { data: session } = useSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e:React.FormEvent) => {
      e.preventDefault(); // Prevent default form submission behavior

      // Sign in using the credentials provider
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
        callbackUrl: 'http://localhost:3000/Sign-up:',
      });

      if (result?.error) {
        // Handle error accordingly
        console.error(result.error);
      } else {
        // Redirect to landing page or update state as needed
        window.location.href = 'http://localhost:3000/Sign-up';
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
      <button type='submit'>Sign In</button>
    </form>
  )
}
