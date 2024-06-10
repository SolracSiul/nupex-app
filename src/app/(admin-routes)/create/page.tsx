import Header from '@/app/components/header/Header'
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import React from 'react'
import { Upload } from 'phosphor-react';
import FileInput from '@/app/components/file/FileInput';
import Teste from '@/app/components/file/Teste';

export default async function page() {
    const session = await getServerSession(nextAuthOptions)
    console.log('dados da session', session)
    return (
      <div>
          <Header name={session?.user.name}/>
          {/* <FileInput name={session?.user.name} email={session?.user.email} id={session?.user.id}/> */}
          <div className='w-full h-full flex flex-col items-center justify-center mt-12'>
            <Teste name={session?.user.name} email={session?.user.email} id={session?.user.id}/>
          </div>
      </div>
  )
}

