import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface PrivateLayoutProps{
    children: ReactNode
}


export default async function PrivateLayoyut({children}:PrivateLayoutProps){
    const session = await getServerSession(nextAuthOptions)

    if(session){
        redirect('/home')
    }
    return <>{children}</>
}