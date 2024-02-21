"use client";

import { sidebarLinks } from '@/constants';
import React from 'react'




import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter} from "next/navigation";


const Page = () => {


  const pathname = usePathname();

  // {sidebarLinks.map((link) => {
    
  // )}

  return (
    <div className='flex flex-col'> 
      <h1 className='head-text'>App is still in development....</h1>
      <br />
      <h1 className='text-white'>Communites will soon be available in the future updates</h1>
    </div>
  )
}

export default Page