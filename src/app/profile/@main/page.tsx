import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {ProjectData} from "@/dbData/ProjectsData"


import ImageMan from '@/assets/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'

function Main() {
  return (
    <main className='mt-[124px] w-screen h-auto flex flex-col gap-28'>
      <MainInfo/>
      <Caursols/>
    </main> 
  
  )
}

export default Main

 function MainInfo(){
 return(
     <div className='pt-10 lg:py-6 xl:py-10'>
           <section className='w-screen flex justify-around md:h-[550px] lg:flex-row lg:h-[400px] xl:h-[500px]'>
        {/* Image */}
        <div className='hidden lg:block lg:w-[380px] xl:w-[600px] h-full '>
          <Image src={ImageMan} alt='profile pic' className='h-full w-full'/>
        </div>
        {/* Information */}
        <section className='w-[80%] lg:w-[380px] xl:w-[560px] h-full  flex gap-3 md:gap-4 flex-col'>
           <div className='w-full bg-white h-[20%] sm:h-auto '>
            <h1 className='flex flex-col font-semibold text-5xl sm:text-8xl sm:py-10 md:text-8xl md:py-10 lg:text-6xl lg:py-0 xl:text-[85px]'>
              <span>
                 hey, I am
              </span>
              <span>
                 faizan
              </span>
            </h1>
           </div>
           <div className='w-full h-1/2 grow  flex'>
            <div className='hidden lg:block w-[20%] lg:h-[30%] xl:h-[45%]  border-b-2 border-black/20'/>            
            <section className='w-full lg:w-[80%] h-full  lg:pl-4 lg:pt-2 flex flex-col'>
                <div className='md:h-auto '>
                <p className='text-base sm:text-lg md:text-xl lg:text-sm xl:text-lg'>I am a passionate computer science student with a strong focus on web development particularly in front-end technologies. Coding is not just a skill but a love I actively pursue daily.

                Since Feb 2023, I have been dedicated to web development, thriving in both solo and team projects. I look forward to continued growth in the dynamic world of web development.
                </p>
                </div>
                <div className='sm:grow  flex gap-4 py-6 md:py-0 md:items-end'>
                <Link href='' className='border-b-2 border-black  text-base sm:text-xl lg:text-lg xl:text-xl font-semibold'>email</Link>
                <Link href=''  className='border-b-2 border-black text-base sm:text-xl lg:text-lg xl:text-xl font-semibold'>github</Link>
                </div>
            </section>
           </div>
        </section>
      </section>
     </div>
 )
}


function Caursols(){
  return(
    <div className='w-full h-auto pl-6 sm:pl-10 md:pl-12 lg:pl-12 lg:pr-10 pt-14 sm:pt-28 md:pt-32 lg:pt-40 pb-20'>
       <div className='max-h-[470px] w-auto overflow-x-auto flex gap-[60px] sm:gap-[80px] lg:gap-[110px]
       xl:gap-[120px] scrollbar-hide'>
         
          {
            ProjectData.map((value, index)=>(
              <div key={index} className='h-[320px] min-w-[210px] sm:h-[320px] sm:min-w-[250px] md:h-[340px] md:min-w-[260px] lg:h-[360px] lg:min-w-[250px] xl:h-[420px] xl:min-w-[320px] bg-blue-600 relative'>
                <h1 className='absolute top-24 right-[-75px] sm:top-28 sm:right-[-75px] lg:top-32 lg:right-[-78px] xl:top-36 xl:right-[-80px] text-2xl sm:text-2xl lg:text-3xl xl:text-3xl w-44 h-auto font-bold'>{value.Title}</h1>
                <h1 className='absolute right-[-25px] top-5 sm:right-[-25px] sm:top-5 lg:right-[-30px] lg:top-5 font-medium text-lg sm:text-lg lg:text-xl xl:text-2xl'>{value.Number}</h1>
                <Link  href="" className='absolute right-[-12px] top-56 sm:right-[-14px] sm:top-64 lg:right-[-16px] lg:top-72 xl:right-[-20px] xl:top-80 text-lg sm:text-xl border-b-2 border-black'>{value.Github}</Link>
              </div>
            ))
          }
          
       </div>
    </div>
  )
}
