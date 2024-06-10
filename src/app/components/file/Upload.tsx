"use client"
import React from 'react'
import FileInput from './FileInput';

interface UserOwn{
  name: String | undefined;
  email: String | undefined;
  id: String | undefined;
}
function Upload() {
    
  return (
        <div  className='w-full h-72 flex justify-center items-center'>
            {/* <FileInput/> */}
        </div>
   
  )
}

export default Upload