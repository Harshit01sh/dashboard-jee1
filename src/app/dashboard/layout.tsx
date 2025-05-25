"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {useState} from 'react'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';


export default function Dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    
  return (
    <SidebarProvider className=''>
    <div className="flex min-h-screen w-full ">
          {/* Left */}

          {/* Right */}
          
            <AppSidebar />
            <SidebarInset> 
            {children}
            </SidebarInset>
          </div>
     
        </SidebarProvider>
      
  )
}

