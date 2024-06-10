import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import Header from '@/app/components/header/Header';
import axiosFetch from '@/app/axios/config';
import FileRow from '@/app/components/table/FileRow';
import Link from 'next/link';

export interface FileData {
  _id: string;
  title: string;
  comentario: string;
  file: string;
  __v: number;
}

export interface GetFilesResponse {
  data: FileData[];
}

export default async function Page() {
  const session = await getServerSession(nextAuthOptions);

  const getFiles = async (): Promise<FileData[]> => {
    try {
      const result = await axiosFetch.get<GetFilesResponse>('/get-files');
      return result.data.data;
    } catch (error) {
      console.error('Error fetching files:', error);
      return [];
    }
  };

  const allFiles = await getFiles();
  console.log()
  return (
    <div>
      <Header name={session?.user?.name || 'Usuário'} />
      <div className="container max-w-[1200px] flex flex-col mx-auto">
        <h1 className="text-center my-4 text-[32px] text-white font-medium">
          Minhas solicitações
        </h1>
        <div className="max-w-[1200px] mt-6">
          <table className="mx-auto bg-white">
            <thead className="bg-gray-800 text-cyan-300">
              <tr>
                <th className="w-1/12 px-4 py-2 border-2 border-white">ID</th>
                <th className="w-3/12 px-4 py-2 border-2 border-white">Title</th>
                <th className="w-4/12 px-4 py-2 border-2 border-white">Doc</th>
                <th className="w-2/12 px-4 py-2 border-2 border-white">Status</th>
              </tr>
            </thead>
            <tbody className="text-cyan-300">
              {allFiles.length > 0 ? (
                allFiles.map((file) => (
                  <FileRow key={file._id} file={file} />
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="border px-4 py-2">
                    Você não tem solicitações
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center">
          <Link href="/create" className='text-[#554DBE] mt-4 bg-transparent hover:text-white hover:bg-[#554DBE] hover:border-[#554DBE] p-2 w-[160px] border text-center border-cyan-300 rounded-md transition duration-300 ease-in-out'>
              Criar solicitação          
          </Link>
        </div>
      </div>
    </div>
  );
}