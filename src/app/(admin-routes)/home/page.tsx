import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import Button from '@/app/components/button/Button';
import Link from 'next/link';

export default async function Admin() {
  const session = await getServerSession(nextAuthOptions)
  console.log('dados da session', session)
  return (
    <>
  
    <div className='bg-[#141414] border-b-2 border-cyan-300'>
      <header className='flex mx-auto gap-2 max-w-[70rem] py-6 px-[1rem]'>
        <div className='flex w-full justify-between'>
          <div>
            <h1 className='text-2xl'>Olá {session?.user.name}</h1>
          </div>
          <div className="flex gap-4 justify-center items-center">
            {session?.user?.profissao === 'nupex' ? (
              <h1>Tabela de solicitações</h1>
            ) : session?.user?.profissao === 'user' ? (
              <>
              <div className='flex gap-6'>
              <button className='text-[#554DBE] bg-transparent hover:text-white hover:bg-[#554DBE] hover:border-[#554DBE] p-2 w-28 border text-center border-cyan-300 rounded-md transition duration-300 ease-in-out'>
              <Link href="/home" className='w-full h-full'>home</Link>
              </button>
              <button className='text-[#554DBE] bg-transparent hover:text-white hover:bg-[#554DBE] hover:border-[#554DBE] p-2 w-28 border text-center border-cyan-300 rounded-md transition duration-300 ease-in-out'>
              <Link href="/history">solicitações</Link>
              </button>
              <Button/>
            </div>
              </>
            ) : null}
          </div>
        </div>
      </header>
    </div>
    <div>
    <div className="container mx-auto p-8">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#554DBE]">NUPEX</h1>
            <h2 className="text-2xl text-white">Núcleo de Pesquisa e Extensão</h2>
        </header>
        <main className="bg-gray-400 p-6 rounded-lg shadow-lg">
            <p className="mb-4">
                A pesquisa encontra na Universidade, através das atividades de ensino, pesquisa e extensão, o ambiente propício para seu desenvolvimento. A produção do conhecimento científico está intimamente associada à pesquisa e tem o compromisso de formar não somente pesquisadores, mas também é de fundamental importância para o desenvolvimento nacional.
            </p>
            <p className="mb-4">
                O Núcleo de Pesquisa e Extensão (NUPEX) foi criado para gerir, supervisionar e implementar a política de iniciação científica e extensão institucional, constituído por uma coordenação e um corpo de professores avaliadores representantes dos cursos da Unifacisa – Centro Universitário, Faculdades de Ciências Médicas (FCM) e Escola Superior de Aviação Civil (ESAC).
            </p>
        </main>
        <footer className="text-center mt-8 text-gray-500">
            <p>&copy; 2024 NUPEX - Todos os direitos reservados.</p>
        </footer>
    </div>
    </div>
    </>
  );
}