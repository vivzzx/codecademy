import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import {Providers} from "./providers";
import { Inter } from 'next/font/google'
import Navbar from "../components/ui/Navbar";
import PostFeed from '@/components/PostFeed';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coolddit',
  description: 'A Reddit clone built with Next.js and Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='min-h-screen bg-stone-200 antialiased pt-12'>
        <Providers>
          <Navbar />
          <div className='container max-w-7xl mx-auto h-full pt-12'>
            {children}
            <PostFeed />
          </div>
        </Providers>
      </body>
    </html>
  )
}
