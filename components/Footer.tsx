import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
  <footer className="bg-transparent w-full h-full text-white   p-5 flex justify-between items-center text-[10px]">
    <div >
      Copyright 2023 VAV
    </div>
    <Link href="https://orglobal.com.ng">PoweredBy: <span className='font-bold'>Orglobal</span></Link>
  </footer>
  )
}
