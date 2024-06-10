import React from 'react'
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import Header from '@/app/components/header/Header';
import Table from '@/app/components/table/Table';
import Link from 'next/link';

export default async function page() {
  const session = await getServerSession(nextAuthOptions)
  console.log('dados da session', session)

  return (
    <div>
        <Header name={session?.user.name}/>
        <div className='container max-w-[1200px] flex flex-col  mx-auto'>
          <h1 className='text-center my-4 text-[32px] text-white font-medium'>Minhas solicitações</h1>
          <Table/>
          <div className='flex justify-center'>
            <button className='text-[#554DBE] mt-4  bg-transparent hover:text-white hover:bg-[#554DBE] hover:border-[#554DBE] p-2 w-[160px] border text-center border-cyan-300 rounded-md transition duration-300 ease-in-out'>
                <Link href="/create" className='w-full h-full'>criar solicitação</Link>
            </button>
          </div>       
        </div>

    </div>
  )
}

