'use client';

import { useRouter } from 'next/navigation';

interface FileRowProps {
  file: {
    _id: string;
    title: string;
    file: string;
  };
}

const FileRow: React.FC<FileRowProps> = ({ file }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/history/${file._id}`);
  };

  return (
    <tr className='bg-gray-800 cursor-pointer hover:bg-gray-600' onClick={handleClick}>
      <td className='border px-4 py-2'>{file._id.slice(-3)}</td>
      <td className='border px-4 py-2'>{file.title}</td>
      <td className='border px-4 py-2'>{file.file}</td>
      <td className='border px-4 py-2 text-[#bbb0b0]'>Em análise</td>
    </tr>
  );
};

export default FileRow;