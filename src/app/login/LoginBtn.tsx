"use client"

import { signIn } from 'next-auth/react'
import React from 'react'

function LoginBtn() {
  return (
    <button onClick={() => signIn("google", {callbackUrl: "/dashboard"})} className='flex gap-2 justify-center items-center border border-neutral-900 rounded p-2'>
        Login com Google
    </button>
  )
}

export default LoginBtn