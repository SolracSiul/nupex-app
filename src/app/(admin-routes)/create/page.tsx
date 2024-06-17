import Header from '@/app/components/header/Header'
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import React from 'react'
import UploadFile from '@/app/components/file/UploadFile';

export default async function page() {
    const session = await getServerSession(nextAuthOptions)
    console.log('dados da session', session)
    return (
      <div>
          <Header name={session?.user.name}/>
          {/* <FileInput name={session?.user.name} email={session?.user.email} id={session?.user.id}/> */}
          <div className='w-full h-full flex flex-col items-center justify-center mt-12'>
            <UploadFile name={session?.user.name} email={session?.user.email} id={session?.user.id}/>
          </div>
      </div>
  )
}

