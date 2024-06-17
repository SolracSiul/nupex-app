'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation'
import { useParams } from 'next/navigation';

import Link from 'next/link';
import { pdfjs } from 'react-pdf';


function FileComponent({ data }: { data: any }) {
  return (
    <div className='text-red-300'>
      <h2>Title: {data._id}</h2>
      <p>Comentário: {data.comentario}</p>
      <p>Arquivo: {data.file}</p>
    </div>
  );
}

function Page() {
  const [fileData, setFileData] = useState<any>(null);
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

  return (
    <div className='max-w-[1200px] container flex flex-col items-center justify-center h-full'>
      {fileData ? <FileComponent data={fileData} /> : <p className='text-white'>Carregando...</p>}
      <Link href="/history" className='text-cyan-400'>Voltar</Link>
    </div>
  );
}

export default Page;

