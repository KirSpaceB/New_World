"use client"
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import UserAuth from '../ReusableComponents/UserAuth';

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
        router.push('/')
      }

  };

  if (session && session.user) {
    return (
      <div>
        <p>Signed in as {session.user.name}</p>
        <button
          onClick={() => signOut({callbackUrl:"http://localhost:3000"})}>Sign Out
        </button>
      </div>
    );
  }

  return (
    <UserAuth
      username={username}
      password={password}
      authType='Sign up'
      setUsername={setUsername}
      setPassword={setPassword}
      handleAuth={handleSignIn}
    />
  )
}
