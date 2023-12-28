import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import Provider from './provider'
// import ParticlesPage from '@/components/Home/Confetti'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VAV',
  description: '100 AFRICAN DIGITAL ENTREPRENEUR CHALLENGE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111] relative `}>
        <Provider>
          
          {/* <div className="z-10"> */}

          {children}
          {/* </div> */}
          </Provider>
      <Toaster />

      </body>
      
    </html>
  )
}
