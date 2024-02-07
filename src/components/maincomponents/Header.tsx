'use client'
import React, { useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Link from 'next/link';
import ResumeLink from '@/assets/resume2.png'


function Header() {
  const [nav, setNav] = useState(false);

  const [animationParent] = useAutoAnimate()

  const handleNav = () => {
    setNav(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    setNav(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header ref={animationParent} className={`z-20 fixed top-0 left-0 right-0 w-screen h-auto`}>
      <div className=''>
        <section className='bg-white bg-opacity-95 lg:bg-transparent py-6 px-8 sm:py-10 sm:px-12 flex justify-between items-center lg:py-10 lg:px-14'>
          <h1 className='text-[26px] sm:text-3xl font-semibold cursor-default'>
            faizan
            <span className='text-black/60'>
              ali.
            </span>
          </h1>
          <VscThreeBars className='block sm:hidden text-[28px] cursor-pointer' onClick={handleNav} />
          <Link href={ResumeLink.src} target='_blank' download={ResumeLink.src} className='hidden sm:block bg-black h-[44px] w-[104px] text-white text-[18px] rounded-[6px] text-center pt-2
            hover:rounded-[20px] transition-all font-medium'>resume</Link>
        </section>
        {nav && <NavWorking closeNav={closeNav} />}
      </div>
    </header>
  )
}

function NavWorking({ closeNav }: { closeNav: () => void }) {

  return (
    <div className='w-full h-screen bg-black/80 animate-wiggle'>
      <section className='sm:hidden w-full h-[200px] bg-white z-10 absolute top-0 border-b-2 border-black/10'>
        <div className='bg-white w-full h-[80%] border-b-2 border-black/10 flex
          flex-col justify-between px-5 py-5'>
          <IoMdClose className='text-2xl' onClick={closeNav} />
          <section className='flex justify-between'>
            <h1 className='text-[24px] font-semibold cursor-default flex items-center'>
              faizan
              <span className='text-black/60'>
                ali.
              </span>
            </h1>
            <button className=' sm:hidden underline text-black text-[20px] 
              hover:rounded-[20px] transition-all font-medium'>
                <Link href={ResumeLink.src} target='_blank' download={ResumeLink.src}>resume</Link>
              </button>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Header;
