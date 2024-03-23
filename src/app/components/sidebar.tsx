"use client"
import React from 'react'
import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";


function Sidebar() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
    console.log("cliquei")
      setOpen(!open);
    };

  return (
    <div className={`sidebar bg-gray-900 text-white ${open ? "w-[300px] absolute top-0 left-0 h-full" : "w-0"}`}>
        <button
        className={`text-white ${open ? 'absolute right-0 mr-4 mt-4': ''}`}
        onClick={toggleSidebar}
        >
        {open ? <FiX  size={32}/> : <FiMenu size={32} color='#718096' />}
        </button>
        {open && (
        <div className="sidebar-content mt-[48px] flex flex-col ">
            <p className="text-md hover:bg-gray-600 w-full pl-4 py-2">Perfil</p>
            <p className="text-md hover:bg-gray-600 w-full pl-4 py-2">Pendências</p>
        </div>
        )}
    </div>
  )
}

export default Sidebar