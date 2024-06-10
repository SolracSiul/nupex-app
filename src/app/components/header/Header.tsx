import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import Button from '@/app/components/button/Button';

interface Props{
  name: String | undefined;
}

export default function Header({name}: Props) {
  
  return (
    <div className='bg-[#141414] border-b-2 border-cyan-300'>
      <header className='flex mx-auto gap-2 w-full py-6 px-[1rem] max-w-[70rem]'>
        <div className='flex w-full justify-between'>
          <h1 className='text-2xl'>Olá {name}</h1>
          <div className='flex gap-6'>
            <button className='text-[#554DBE] bg-transparent hover:text-white hover:bg-[#554DBE] hover:border-[#554DBE] p-2 w-28 border text-center border-cyan-300 rounded-md transition duration-300 ease-in-out'>
            <Link href="/home" className='w-full h-full'> home</Link>
            </button>
            <button className='text-[#554DBE] bg-transparent hover:text-white hover:bg-[#554DBE] hover:border-[#554DBE] p-2 w-28 border text-center border-cyan-300 rounded-md transition duration-300 ease-in-out'>
            <Link href="/history">solicitações </Link>
            </button>
            <Button/>
          </div>
        </div>
      </header>
    </div>
  );
}