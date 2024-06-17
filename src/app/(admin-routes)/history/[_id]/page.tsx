'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Link from 'next/link';


function FileComponent({ data }: { data: any }) {

  const viewPDf = (pdf: String) =>{
    window.open(`http://localhost:3001/files/${pdf}`, "_blank","noreferrer")
  }

  return (
    <div className='text-gray-700 bg-red-50 p-6 rounded-lg shadow-md w-full flex flex-col items-center mt-6 '>
      <h1 className='text-gray-700 text-[32px] font-semibold '>Arquivo enviado pelo aluno</h1>
      <h2 className='text-2xl font-bold mb-4'> <span className='font-bold text-gray-700 '>Titulo: </span> {data.title}</h2>
      <p className='mb-4'> <span className='font-bold text-gray-700 '>Assunto: </span> {data.comentario}</p>
      <div className='flex justify-between items-center'>
        <button 
          onClick={() => viewPDf(data.file)} 
          className='bg-blue-500  text-white px-4 py-2 rounded-lg border border-cyan-700 hover:text-gray-200 hover:border-cyan-300 transition duration-200'
        >
          Visualizar Arquivo
        </button>
      </div>
    </div>
    
  );
}

function Page() {
  const [fileData, setFileData] = useState<any>(null);
  const [comentario, setComentario] = useState('');
  const params = useParams();
  const id = params._id; 
  
  useEffect(() => {
    if(!id) return;
    
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/file/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        setFileData(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleComentarioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComentario(e.target.value);
  };
  const viewPDf = (pdf: String) =>{
    window.open(`http://localhost:3001/files/${pdf}`, "_blank","noreferrer")
  }
  const sendComentário = () =>{

  }
  
  return (
    <div className=''>
      {fileData ? (
        <>
        <div className='container flex flex-col items-center justify-center mx-auto'>      
          <FileComponent data={fileData} />
          <div className='mt-4'>
            <label className='block text-blue-400 text-sm text-[18px] mb-2' htmlFor='comentario'>Comentário:</label>
            <textarea
              id='comentario'
              className='shadow resize-none bg-red-50 appearance-none h-[80px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={comentario}
              onChange={handleComentarioChange}
            ></textarea>
            <button 
              onClick={sendComentário} 
              className='bg-blue-500 text-white px-4 py-2 rounded-lg border border-cyan-700 hover:text-gray-200 hover:border-cyan-300 transition duration-200'
            >
              Enviar comentario
            </button>
          </div>
          <Link href={`/history`} className='text-blue-500 hover:underline mt-6'>Voltar</Link>
          </div>
        </>
      ) : (
        <p className='text-white'>Carregando...</p>
      )}

    </div>
  );
}

export default Page;

