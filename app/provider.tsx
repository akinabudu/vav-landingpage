'use client'
import React from 'react'
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });




export default function Provider({  children,
}: {
  children: React.ReactNode}) {
    const tawkMessengerRef: any = useRef();

  return (
    <>
    <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID}
        ref={tawkMessengerRef}
      />
      <div className={`${inter.className} w-full antialiased flex flex-col justify-center overflow-x-hidden`}>

      {children}
      </div>
    </>
  )
}
