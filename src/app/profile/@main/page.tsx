import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageMan from '@/assets/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'

function Main() {
  return (
    <main className='mt-[124px] w-screen h-auto pt-10 lg:py-6 xl:py-10'>
      <MainInfo/>
    </main>
  
  )
}

export default Main

 function MainInfo(){
 return(
     <>
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
     </>
 )
}

