import React from 'react'
import { ToastContainer } from 'react-toastify'

import type { Metadata } from 'next'
import { Exo } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Providers } from '@/components/Providers'

import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

const exo = Exo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plan',
  description: 'Template for a Next.js app with TypeScript and Sass',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
        <ToastContainer />
      </body>
    </html>
  )
}
