"use client"
import axiosFetch from '@/app/axios/config';
import React from 'react'
import { useEffect, useState } from 'react'

export interface FileData {
    _id: string;
    title: string;
    comentario: string;
    fileName: string;
    __v: number;
}
  
export interface GetFilesResponse {
    data: FileData[];
}

function Table() {
    const [allFile, setAllFile] = useState<FileData[] | null>(null);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    try {
        const result = await axiosFetch.get<GetFilesResponse>('/get-files');
        setAllFile(result.data.data);
        console.log(result.data.data);
    } catch (error) {
        console.error('Error fetching files:', error);
    }
  }
  const viewPDf = (pdf: String) =>{
    window.open(`http://localhost:3001/files/${pdf}`, "_blank","noreferrer")
  }

  return (
    <div className="max-w-[1200px] mt-6">
        <table className="mx-auto bg-white">
            <thead className="bg-gray-800 text-cyan-300 ">
                <tr>
                    <th className="w-1/12 px-4 py-2 border-2 border-white">ID</th>
                    <th className="w-3/12 px-4 py-2 border-2 border-white">Title</th>
                    <th className="w-4/12 px-4 py-2 border-2 border-white">Doc</th>
                    <th className="w-2/12 px-4 py-2 border-2 border-white">Status</th>
                </tr>
            </thead>
            <tbody className="text-cyan-300">
                {allFile ? (
                    allFile.map((file) =>(
                        <tr key={file._id} className='bg-gray-800 cursor-pointer hover:bg-gray-600' onClick={() => viewPDf(file.fileName)}>
                            <td className='border px-4 py-2'>{file._id.slice(-3)}</td>
                            <td className='border px-4 py-2'>{file.title}</td>
                            <td className='border px-4 py-2'>{file.fileName}</td>
                            <td className='border px-4 py-2 text-[#bbb0b0]'>Em analíse</td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={4} className='border px-4 py-2 '>Você não tem solicitações</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table