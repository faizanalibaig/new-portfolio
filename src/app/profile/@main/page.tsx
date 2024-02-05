import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageMan from '@/assets/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'

function Main() {
  return (
    <main className='mt-[124px] w-screen h-auto pt-10 lg:py-6 xl:py-10'>
      <section className='w-screen flex justify-around md:h-[550px] lg:flex-row lg:h-[450px] xl:h-[500px]'>
        {/* Image */}
        <div className='hidden lg:block lg:w-[450px] xl:w-[600px] h-full '>
          <Image src={ImageMan} alt='profile pic' className='h-full w-full'/>
        </div>
        {/* Information */}
        <section className='w-[80%] lg:w-[420px] xl:w-[560px] h-full  flex gap-2 md:gap-0 flex-col'>
           <div className='w-full bg-white h-[20%] sm:h-auto '>
            <h1 className='flex flex-col font-semibold text-5xl sm:text-8xl sm:py-10 md:text-8xl md:py-10 lg:text-7xl lg:py-0 xl:text-8xl'>
              <span>
                 hey, I am
              </span>
              <span>
                 faizan
              </span>
            </h1>
           </div>
           <div className='w-full h-1/2 grow  flex'>
            <div className='hidden lg:block w-[20%] lg:h-[40%] xl:h-[45%]  border-b-2 border-black'/>            
            <section className='w-full lg:w-[80%] h-full  lg:pl-4 lg:pt-2 flex flex-col'>
                <div className='md:h-[80%] '>
                <p className='text-base sm:text-lg md:text-xl lg:text-base xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet deleniti ratione magni amet rerum architecto ullam dignissimos consequatur reprehenderit exercitationem optio eligendi molestias nisi explicabo, magnam ipsa earum molestiae. Magni amet rerum architecto ullam dignissimos consequatur reprehenderit.
                </p>
                </div>
                <div className='sm:grow  flex gap-4 py-6 md:py-0 lg:items-end'>
                <Link href='' className='underline  text-base sm:text-xl lg:text-lg xl:text-xl font-semibold'>email</Link>
                <Link href=''  className='underline text-base sm:text-xl lg:text-lg xl:text-xl font-semibold'>github</Link>
                </div>
            </section>
           </div>
        </section>
      </section>
    </main>
  
  )
}

export default Main


// <main className='mt-[124px] px-10'>
// <div className='md:h-[450px] xl:h-[550px] md:px-5 xl:px-20 py-10 flex flex-col gap-4 md:flex-row'>
//   <div className='w-full md:w-2/6 lg:h-2/5 xl:2/5 py-4'>
//     <h1 className='text-7xl md:text-[55px] lg:text-7xl xl:text-8xl font-bold flex flex-col'>
//     <span>{`hey, I'm`}</span>
//     <span>faizan</span>
//     </h1>
//   </div>

//   <div className='w-full md:w-[65%] lg:w-3/5 xl:3/5 md:flex justify-between'>
//     <div className='w-[25%] border-b-2 border-black/30 hidden sm:hidden md:block md:h-72 xl:h-80' />

//     <div className='w-full md:w-[70%] flex md:items-end'>
//       <p className='text-base sm:text-lg md:text-xs lg:text-sm xl:text-lg'>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita culpa veniam fugit dolores laboriosam repudiandae sed adipisci ipsum quaerat consectetur eligendi inventore suscipit nostrum pariatur libero, officia sit non architecto molestias ea voluptatum tenetur? Facilis deserunt vero pariatur quas, quisquam minima totam eos tempore blanditiis, asperiores dolores dolor ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum atque vitae doloremque? Cumque adipisci qui ratione ex consequatur voluptate aspernatur omnis facilis placeat labore voluptatem, aliquid temporibus nostrum ducimus! Doloremque fugit doloribus inventore, ullam quod necessitatibus asperiores deleniti. Corporis?
//       </p>
//     </div>
//   </div>
// </div>
// </main>