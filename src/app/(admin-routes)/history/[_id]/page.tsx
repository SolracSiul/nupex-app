"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
function FileComponent({ data }: { data: any }) {
  return (
    <div>
      <h2>Title: {data.title}</h2>
      <p>Comentário: {data.comentario}</p>
      <p>Arquivo: {data.file}</p>
    </div>
  );
}

function Page() {
  const [fileData, setFileData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/file/666701332b2932057c301eaa');
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
  }, []);

  return (
    <div className='max-w-[1200px] container flex flex-col items-center justify-center h-full'>
      {fileData ? <FileComponent data={fileData} /> : <p>Carregando...</p>}
      <Link href="/history" className='text-cyan-400'>Voltar</Link>
    </div>
  );
}

export default Page;

