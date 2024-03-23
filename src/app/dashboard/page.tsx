import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'
import Profile from '../components/profile';
import Sidebar from '../components/sidebar';
import Upload from '../components/upload';

export default async function Page(){
    const session = await getServerSession();

    if(!session){
        redirect('/')
    }

    return (
        <div className="bg-[#182741e0] w-full">
          <header className='w-full bg-[#182741] '>
            <div className='container mx-auto px-4 md:px-0'>
            <nav>
              <ul className='flex items-center justify-between text-white'>
                <li><Sidebar/></li>
                <li><Profile name={session.user?.name!} email={session.user?.email!} imageUrl={session.user?.image!}/></li>
              </ul>
            </nav>
            </div>
          </header>
          <div className='container mx-auto h-[100vh] '>
              <Upload/>
          </div>
        </div>
      

    )
}