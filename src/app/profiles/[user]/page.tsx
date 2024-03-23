import React from 'react'

interface Props{
    params:{user: string};
}
function ProfileDetails({params}: Props) {
  return (
    <>
        <h1>Perfil: {params.user}</h1>
    </>
  )
}

export default ProfileDetails