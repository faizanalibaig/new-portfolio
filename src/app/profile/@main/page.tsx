import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPreact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";




import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {ProjectData} from "@/dbData/ProjectsData"
import ImageMan from '@/assets/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'
import CImage from "@/assets/letter-c.png"

function Main() {
  return (
    <main className='mt-[124px] w-screen h-auto flex flex-col gap-28'>
      <MainInfo/>
      <Caursols/>
      <TechnicalExpertise/>
      <Footer/>
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
              <div key={index} className='h-[340px] min-w-[210px] sm:h-[340px] sm:min-w-[250px] md:h-[340px] md:min-w-[260px] lg:h-[360px] lg:min-w-[250px] xl:h-[420px] xl:min-w-[320px] bg-blue-600 relative'>
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


function TechnicalExpertise(){
  return(
    <div className='h-auto w-full  py-20 flex flex-col gap-8 lg:flex-row'>
          <div className='h-full lg:w-1/2 px-5 sm:px-16 lg:px-18 xl:px-20 '>
                  <Table>
                   <TableHeader className='bg-black/[2%]'>
                   <TableRow>
                          <TableHead className="w-full h-16 font-semibold text-black text-base sm:text-xl md:text-xl lg:text-lg xl:text-xl">Front-end Development Expertise</TableHead>
                          <TableHead className="w-full h-16 font-semibold text-black text-xl"></TableHead>

                 </TableRow>
                        
                 </TableHeader>
                  <TableBody>
                         <TableRow >
                       <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg font-medium h-12'>Hypertext Markup Language (HTML)</TableCell>
         
                       <TableCell className='text-black text-medium text-xl sm:text-2xl'><FaHtml5 /></TableCell>
                       </TableRow>    

                       <TableRow >

                       <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>Cascading Style Sheets (CSS)</TableCell>

                       <TableCell className='text-black text-medium text-xl sm:text-2xl'><SiCsswizardry /></TableCell>
                       </TableRow>    

                       <TableRow >

                       <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>Javascript</TableCell>

                       <TableCell className='text-black text-medium text-xl sm:text-2xl'><IoLogoJavascript/></TableCell>
                       </TableRow>    

                       <TableRow >

                        <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>ReactJS</TableCell> 

                        <TableCell className='text-black text-medium text-xl sm:text-2xl'><SiPreact/></TableCell>
                        </TableRow>    

                        <TableRow >

                        <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>NextJs</TableCell> 

                        <TableCell className='text-black text-medium text-xl sm:text-2xl'><SiNextdotjs/></TableCell>
                        </TableRow>    

                        <TableRow >

                        <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>Typescript</TableCell>

                        <TableCell className='text-black text-medium text-xl sm:text-2xl'><SiTypescript/></TableCell>

                          </TableRow> 
                          <TableRow >
                         <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>MongoDB</TableCell>
                         <TableCell className='text-black text-medium text-xl sm:text-2xl'><SiMongodb /></TableCell>
                       </TableRow>    
             </TableBody>
             </Table>
          </div>
          <div className='lg:w-1/2 px-4 sm:px-16 lg:px-18 xl:px-20 flex flex-col gap-8'>
               <div className='h-auto w-full'>
               <Table>
               <TableHeader className='bg-black/[2%]'>
                   <TableRow>
                          <TableHead className="w-full h-14 font-semibold text-black text-base  sm:text-xl md:text-xl lg:text-lg xl:text-xl">Development Software Expertise</TableHead>
                          <TableHead className="w-full h-16 font-semibold text-black text-xl"></TableHead>
                 </TableRow>
                 </TableHeader>
                   <TableBody>
                        <TableRow >
                         <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>Figma</TableCell>
                         <TableCell className='text-black text-medium text-xl sm:text-2xl'><IoLogoFigma /></TableCell>
                       </TableRow> 
                       <TableRow >
                         <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>Canva</TableCell>
                         <TableCell className='text-black text-medium text-xl sm:text-2xl'><SiCanva /></TableCell>
                       </TableRow> 
                         
                 </TableBody>
                   </Table>
               </div>
               <div className='h-auto w-full'>
               <Table>
               <TableHeader className='bg-black/[2%]'>
                   <TableRow>
                          <TableHead className="w-full h-16 font-semibold text-black text-base  sm:text-xl md:text-xl lg:text-lg xl:text-xl">Courses</TableHead>
                          <TableHead className="w-full h-16 font-semibold text-black text-xl"></TableHead>
                 </TableRow>
                 </TableHeader>
                   <TableBody>
                        <TableRow >
                         <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>Programming Fundamentals</TableCell>
                         <TableCell className='text-black text-medium '><Image src={CImage} alt='' className='w-5 sm:w-6 h-auto'/></TableCell>
                       </TableRow> 
                       <TableRow >
                         <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>Object Oriented Programming</TableCell>
                         <TableCell className='text-black text-medium text-xl sm:text-2xl'><FaJava /></TableCell>
                       </TableRow>   
                       <TableRow >
                         <TableCell className='text-black text-medium text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg  font-medium h-12'>DSA</TableCell>
                         <TableCell className='text-black text-medium text-2xl'><Image src={CImage} alt='' className='w-5 h-auto'/></TableCell>
                       </TableRow> 
                 </TableBody>
                   </Table>
               </div>
          </div>
    </div>
  )
}


function Footer(){
  return(
    <footer className='w-full h-auto border-t-2 border-black/20 pt-10 pb-5 px-8 sm:px-16 sm:py-10 md:px-20 md:py-12  lg:py-20 lg:px-28 xl:px-32  flex flex-col
    gap-10 sm:flex-row sm:gap-0 justify-between '>
       <section className='sm:w-[50%] lg:w-[45%] xl:w-[30%] h-full  flex flex-col gap-10 '>
      <div className='flex flex-col gap-1 sm:gap-2'>
      <h1 className='text-[26px] sm:text-3xl font-semibold cursor-default pb-1 sm:pb-2'>
                faizan
                <span className='text-black/60'>
                ali.
                </span>
        </h1>
        <p className='text-base sm:text-lg xl:text-xl font-med'>
        I am open to accepting freelance work opportunities.
        </p>
        <Link href="" className='text-base sm:text-lg xl:text-xl underline'>riazfiaz6181@gmail.com</Link>
      </div>
        <div className=''>
           <p className='text-xs sm:text-sm xl:text-base'> <span>designed & developed by Faizan Ali Baig with love.</span>
            <span> this website is open source on github</span>
           </p>
        </div>
       </section>
       <section className='sm:w-[35%] md:w-[30%] h-auto flex flex-col sm:items-end sm:justify-between'>
          <div className='pl-2 h-8  flex justify-center items-center sm:justify-end gap-5 sm:border-l-2 sm:border-black/40 '>
           <Link href=''><AiFillInstagram className='text-[22px] sm:text-[24px] md:text-[26px] xl:text-[28px]'/></Link>  
            <Link href=''><FaGithub className='text-[18px] sm:text-[20px] md:text-[22px] xl:text-2xl'/></Link> 
            <Link href=''> <IoLogoLinkedin className='text-[20px] sm:text-[22px] md:text-[24px] xl:text-[26px]'/></Link>
          </div>
          <div>
            <p className='text-xs sm:text-sm xl:text-base text-center sm:text-right'>All rights reserved © 2024</p>
          </div>
       </section>
    </footer>
  )
}