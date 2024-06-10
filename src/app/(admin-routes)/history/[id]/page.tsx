"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Details( { params }: { params: { blogId: string } }){
    console.log('isso:', params.blogId)
    return(<>
        <h1>o conteudo deve estar aq: {params.blogId}111  </h1>
        <Link href="/history">
            voltar 
        </Link>
    </>
    )
}