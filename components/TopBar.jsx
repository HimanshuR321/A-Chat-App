"use client";

import { Logout } from '@mui/icons-material';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const TopBar = () => {
    const pathname = usePathname();
    const handleLogout = async () =>{
        signOut({callbackUrl:"/"})
    }
    const {data:session} = useSession();
    const user = session?.user;
  return (
    <div className='topbar'>
      <Link href="/chats">
        <div className='flex items-center gap-3'>
            <img src="/assets/logo.png" alt="alt" className='w-20'/>
            <p className='text-body-bold text-blue-950'>ImBesideYou CHAT APP</p>
        </div>
      </Link>

      <div className='menu'>
        <Link href="/chats" className={`${pathname==="/chats" ? "text-blue-500" : ""} text-heading4-bold`}>Chats</Link>
        <Link href="/contacts" className={`${pathname==="/contacts" ? "text-blue-500" : ""} text-heading4-bold`}>Contacts</Link>
        <Logout sx={{color:"#FF0000", cursor:"pointer"}} onClick={handleLogout}/>
        <Link href="/profile"><img src={user?.profileImage || "/assets/person.jpg"} alt="profile" className='profilePhoto'/></Link>
     </div>  
    </div>
  )
}

export default TopBar
