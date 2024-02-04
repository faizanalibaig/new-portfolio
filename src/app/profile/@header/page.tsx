import React from 'react'
import { VscThreeBars } from "react-icons/vsc";

function Header() {
  return (
    <header className={`py-8 px-8 sm:py-10 sm:px-12 fixed w-screen h-auto bg-transparent`}>
        <section className='flex justify-between items-center'>
            <h1 className='text-[28px] sm:text-3xl font-semibold'>
                faizan
                <span className='text-black/60'>
                ali.
                </span>
            </h1>
            <VscThreeBars className='block sm:hidden text-[28px]'/>
            
           <button className='hidden sm:block bg-black h-[44px] w-[104px] text-white text-[18px] rounded-[6px] 
           hover:rounded-[20px] transition-all font-medium'>
            resume</button> 
        </section>
    </header>
  )
}

export default Header


