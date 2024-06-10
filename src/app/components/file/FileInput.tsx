"use client"
import React, { useCallback, useState } from 'react';
import { WiCloudUp } from "react-icons/wi";
import { useDropzone, DropzoneState } from 'react-dropzone';
import { BiUpload } from 'react-icons/bi';
import { FaFile } from 'react-icons/fa';
import { TbClockEdit } from 'react-icons/tb';
import { useRouter } from 'next/navigation'
import { User } from 'next-auth';

interface InputProps {
    dropzone: DropzoneState;
}

interface HasFileProps {
    file?: File;
    removeFile: () => void;
}
interface UserOwn{
    name: String | undefined;
    email: String | undefined;
    id: String | undefined;
}

function FileInput({name, email,id}: UserOwn) {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const router = useRouter()


    const removeFile = useCallback(() => {
        setFile(null);
    }, []);

    const onDrop = useCallback((files: File[]) => {
        setFile(files[0]);
    }, []);

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'text/plain': ['.txt'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            title,
            comment,
            file
        };
        console.log(formData);
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou fazer outra coisa com eles.
    };
    const buttonEnviar = () =>{
        alert('nova solicitação criada')
        console.log('enviando dados pra o backend')
        router.replace('/history')
    }

    return (
        <div className='max-w-[640px] mx-auto flex flex-col items-center'>
        <h1 className='text-[32px] font-bold py-6 text-white'>Solicitar nova correção</h1>
        <h2>quem ta criando é {name}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Título" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea 
                    placeholder="Comentário" 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full  resize-none px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            {file ? (
                <HasFile file={file} removeFile={removeFile} />
            ) : (
                <Input dropzone={dropzone} />
            )}
            <div className='flex justify-end'>
                <button onClick={buttonEnviar} type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Enviar
                </button>
            </div>
        </form>
        </div>
    );
}

export default FileInput;

const Input = ({ dropzone }: InputProps) => {
    const { getRootProps, getInputProps, isDragActive } = dropzone;
    return (
        <div {...getRootProps()} className={`w-full h-[120px] rounded-lg border-dashed border-4 hover:border-gray-500 bg-gray-700 ${isDragActive ? 'border-blue-400' : 'border-gray-600'}`}>
            <label htmlFor='dropzone-file' className='cursor-pointer w-full h-full'>
                <div className='flex flex-col items-center justify-center pt-5 pb-6 w-full h-full'>
                    <BiUpload size={44} className={`w-10 h-10 mb-3 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`} />
                    {isDragActive ? (
                        <p className='font-bold text-lg text-blue-400'>Solte para adicionar</p>
                    ) : (
                        <>
                            <p className='mb-2 text-lg text-gray-400'>
                                <span className='font-bold'>Clique para enviar</span> ou arraste até aqui
                            </p>
                            <p className='text-gray-400 text-sm'>PDF, DOC, DOCX ou TXT</p>
                        </>
                    )}
                </div>
            </label>
            <input {...getInputProps()} className='hidden' />
        </div>
    );
};

const HasFile = ({ file, removeFile }: HasFileProps) => {
    return (
        <div className='w-full h-32 rounded-lg border-dashed border-4 border-gray-400 bg-gray-700 flex justify-center items-center'>
            <div className='bg-white w-64 rounded-md shadow-md flex gap-3 items-center justify-center'>
                <FaFile size={44} className='w-5 h-5 ml-4 my-4' />
                <span className='text-sm text-gray-500 my-4'>{file?.name}</span>
                <button type="button" onClick={removeFile} className='place-self-start mt-1 p-1'>
                    <TbClockEdit className='w-5 h-5' />
                </button>
            </div>
        </div>
    );
};
