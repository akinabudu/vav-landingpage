import React from 'react'
import { poppins, poppinsHeader } from '../Fonts'

export default function WhyWeDoIt() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[70vh] gap-10 my-10'>

        <div className={`${poppinsHeader.className} text-3xl text-main`}>Why We Do It</div>
        <div className='w-[80%]'>
            <iframe width="100%" height="auto" className="h-[50vh] w-full  flex justify-center items-center" src="https://youtube.com/embed/uotohZh-pKY"></iframe>
        </div>
    </div>
  )
}

