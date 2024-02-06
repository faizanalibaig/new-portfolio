'use client'
import React, { useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(true);
    // Disable scrolling when the navigation is opened
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    setNav(false);
    // Enable scrolling when the navigation is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`z-20 fixed top-0 left-0 right-0 w-screen h-auto`}>
      <div className=''>
        <section className='bg-white bg-opacity-95 lg:bg-transparent py-6 px-8 sm:py-10 sm:px-12 flex justify-between items-center lg:py-10 lg:px-14'>
          <h1 className='text-[26px] sm:text-3xl font-semibold cursor-default'>
            faizan
            <span className='text-black/60'>
              ali.
            </span>
          </h1>
          <VscThreeBars className='block sm:hidden text-[28px] cursor-pointer' onClick={handleNav} />
          <button className='hidden sm:block bg-black h-[44px] w-[104px] text-white text-[18px] rounded-[6px] 
            hover:rounded-[20px] transition-all font-medium'>resume</button>
        </section>
        {nav && <NavWorking closeNav={closeNav} />}
      </div>
    </header>
  )
}

function NavWorking({ closeNav }: { closeNav: () => void }) {

  return (
    <div className='w-full h-screen bg-black/40'>
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
              hover:rounded-[20px] transition-all font-medium'>resume</button>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Header;
