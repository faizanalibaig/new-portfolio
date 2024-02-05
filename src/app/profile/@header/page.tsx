import React from 'react'
import { VscThreeBars } from "react-icons/vsc";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


function Header() {
  return (
    <header className={`z-10 py-8 px-8 sm:py-10 sm:px-12 fixed top-0 left-0 right-0 w-screen h-auto bg-transparent`}>
        <section className='flex justify-between items-center'>
            <h1 className='text-[26px] sm:text-3xl font-semibold cursor-default'>
                faizan
                <span className='text-black/60'>
                ali.
                </span>
            </h1>
            <VscThreeBars className='block sm:hidden text-[28px] cursor-pointer'/>

             <TooltipProvider>
               <Tooltip>
                  <TooltipTrigger className='hidden sm:block bg-black h-[44px] w-[104px] text-white text-[18px] rounded-[6px] 
                   hover:rounded-[20px] transition-all font-medium'>resume</TooltipTrigger>
                  <TooltipContent>
                       <p>Download Resume</p>
                  </TooltipContent>
               </Tooltip>
              </TooltipProvider>
           
        </section>
    </header>
  )
}

export default Header


