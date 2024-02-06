

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

import Image from "next/image";
import CImage from "@/assets/letter-c.png"


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  


export default function TechnicalExpertise(){
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
  