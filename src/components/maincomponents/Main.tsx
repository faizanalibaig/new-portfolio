'use client'
import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'


import TechnicalExpertise from '@/components/maincomponents/TechnicalExpertise';
import Caursols from '@/components/maincomponents/Caursols';

import ImageMan from '@/assets/WhatsApp Image 2024-02-07 at 1.22.16 PM.jpeg'
import ImageOther from "@/assets/WhatsApp Image 2024-02-07 at 1.30.19 PM.jpeg"

function Main() {

//  0 bottom of view screen, 1 start of new view screen,  first part about when start and second when end

  return (
    <div className='mt-[124px] w-screen h-auto flex flex-col gap-28'>
      <MainInfo/>
       <Caursols/> 
      <TechnicalExpertise/>
    </div> 
  
  )
}

export default Main

 function MainInfo(){


 return(
     <div className='pt-2 sm:pt-10 lg:py-6 xl:py-5'>
           <section className='w-screen flex justify-center md:h-auto lg:flex-row lg:h-[400px] xl:h-[500px]'>
        {/* Image */}
        <div className='hidden lg:block lg:w-[450px] xl:w-[650px] h-full '>
        <Image src={ImageMan} alt='profile pic' className='h-full w-auto bg-black/30' loading="lazy"/>
       </div>

        {/* Information */}
        <section className='w-[80%] lg:w-[380px] xl:w-[560px] h-auto lg:h-full  flex gap-3 md:gap-4 flex-col'>
          <div>
            <Image src={ImageOther} alt='' className='block lg:hidden h-auto w-full pb-5'/>
          </div>
           <div className='w-full bg-white h-[20%] sm:h-auto '>
            <h1 className='flex flex-col font-semibold text-5xl sm:text-8xl sm:py-10 md:text-8xl md:py-10 lg:text-6xl lg:py-0 xl:text-[85px]'>
              <span>
                 Hey, I am
              </span>
              <span>
                 faizan
              </span>
            </h1>
           </div>
           <div className='w-full h-1/2 grow flex md:gap-5 lg:gap-0'>
            <div className='hidden lg:block w-[20%] lg:h-[30%] xl:h-[45%]  border-b-2 border-black/20'/>            
            <section className='w-full lg:w-[80%] h-full  lg:pl-4 lg:pt-2 flex flex-col'>
                <div className='md:h-auto '>
                <p className='text-base sm:text-lg md:text-xl lg:text-sm xl:text-lg'>I am a passionate computer science student with a strong focus on web development particularly in front-end technologies. Coding is not just a skill but a love I actively pursue daily.

                Since Feb 2023, I have been dedicated to web development, thriving in both solo and team projects. I look forward to continued growth in the dynamic world of web development.
                </p>
                </div>
                <div className='sm:grow flex gap-4 py-6 md:py-0 md:items-end'>
                <Link href='mailto:riazfiaz6181@gmail.com' className='border-b-2 border-black  text-lg sm:text-2xl lg:text-xl xl:text-xl '>email</Link>
                <Link href='https://github.com/faizanalibaig' target='_blank' className='border-b-2 border-black text-lg sm:text-2xl lg:text-xl xl:text-xl '>github</Link>
                </div>
            </section>
           </div>
        </section>
      </section>
     </div>
 )
}



