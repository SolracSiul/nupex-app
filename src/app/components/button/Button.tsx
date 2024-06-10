'use client'
import React from 'react'
import {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation'

function Button() {
    const router = useRouter()

    async function logout(){
        await signOut({
            redirect: false
        })
        router.replace('/')
    }

    return <button onClick={logout} className='text-[#554DBE] bg-transparent hover:text-white hover:bg-[#554DBE] hover:border-[#554DBE] p-2 w-28 text-center border border-cyan-300 rounded-md transition duration-300 ease-in-out'>Sair</button>
}

export default Button