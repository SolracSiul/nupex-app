import React from 'react'

export interface Props{
    name: string;
    imageUrl: string;
    email: string;

}
function Profile({name, imageUrl, email}: Props) {
  return (
    <div className="flex items-center py-2">
          <img src={imageUrl} alt="User" className="w-16 h-16 rounded-full mb-2" />
          <div className='flex flex-col ml-4'>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-600">{email.split("@")[0]}</p>
          </div>
        </div>
  )
}

export default Profile