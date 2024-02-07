'use client'

import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ProjectData } from "@/dbData/ProjectsData";
import { InDepthDetail } from "@/dbData/InDepthDetail";


import Link from "next/link";

interface ProjectItem {
  key: number;
  Title: string;
  Number: string;
  link: string;
  Github: string;
}
interface ProjectDetail {
  key: number;
  Number: string;
  Title: string;
  description: string;
  visit?: string; // Make the visit property optional
  link: string;
}


export default function Caursols() {
  const [index, setIndex] = useState<number>(0);
  const [card, setCard]=useState(false)

  const handleCard=(()=>{
    setCard(true)
  })

  const handleProjectClick = (key: number) => {
    setIndex(key);
  };
  const handleCarded = () => {
    setCard(false);
  };

  return (
    <div className="w-full h-full lg:pr-10 pt-14 sm:pt-28 md:pt-32 lg:pt-40 pb-20">
   {card ? ( <ViewMore indexNumber={index} handleCarded={handleCarded} />) : 
     ( <div className=" pl-6 sm:pl-10 md:pl-12 lg:pl-12 max-h-[470px] w-auto overflow-x-auto flex gap-[60px] sm:gap-[80px] lg:gap-[110px]  xl:gap-[120px] scrollbar-hide ">
        {ProjectData.map((project: ProjectItem, projectIndex: number) => (
          <div
            id={`element${project.key}`}
            key={projectIndex}
            className=' h-[360px] min-w-[210px] sm:h-[360px] sm:min-w-[250px] md:h-[360px] md:min-w-[260px] lg:h-[360px] lg:min-w-[250px] xl:h-[420px] xl:min-w-[320px] bg-blue-600 relative'
          >
            <h1 className="absolute top-24 right-[-75px] sm:top-28 sm:right-[-75px] lg:top-32 lg:right-[-78px] xl:top-36 xl:right-[-80px] text-2xl sm:text-2xl lg:text-3xl xl:text-3xl w-44 h-auto font-bold">
              {project.Title}
            </h1>
            <h1 className="absolute right-[-25px] top-5 sm:right-[-25px] sm:top-5 lg:right-[-30px] lg:top-5 font-medium text-lg sm:text-lg lg:text-xl xl:text-2xl">
              {project.Number}
            </h1>
            <button
              className="absolute right-[-12px] top-56 sm:right-[-14px] sm:top-64 lg:right-[-16px] lg:top-72 xl:right-[-20px] xl:top-80 text-lg sm:text-xl border-b-2 border-black"
              onClick={() => {
                handleProjectClick(project.key);
                handleCard();
              }}            >
              {project.Github}
            </button>
          </div>
        ))}
      </div> )
}
    </div>
  );
}

interface ViewMoreProps {
  indexNumber: number;
  handleCarded: () => void;
}

function ViewMore({ indexNumber, handleCarded }: ViewMoreProps) {
  const [projectDetails, setProjectDetails] = useState<ProjectDetail | null>(
    null
  );

  const fetchData = () => {
    const detail = InDepthDetail.find((detail) => detail.key === indexNumber);
    if (detail !== undefined) {
      setProjectDetails(detail);
    } else {
      setProjectDetails(null); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [indexNumber]); 

  return (
    <div className="w-screen h-[500px] px-12 sm:px-16 lg:px-32">
      {projectDetails && (
        <section className="w-full h-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-[40%] xl:w-[33%] h-full flex flex-col pb-5">
            <div className="flex justify-between">
            <h1 className="text-lg sm:text-xl lg:text-xl pb-10">{projectDetails.Number}</h1>
            <IoMdClose className="block lg:hidden text-2xl sm:text-3xl cursor-pointer" onClick={handleCarded}/>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold max-w-full">
              {projectDetails.Title}
            </h1>
          </div>
          <div className="hidden lg:block lg:w-[18%] xl:w-[25%] h-full">
            <div className="w-[80%] h-1/2 border-b-2 border-black/30"/>
          </div>
          <div className="px-2 py-2 w-full lg:w-[42%] h-full flex flex-col justify-between">
            <div className="flex justify-end">
              <IoMdClose className="hidden lg:block lg:text-4xl cursor-pointer" onClick={handleCarded}/>
            </div>
            <div>
              <p className="text-base sm:text-lg lg:text-lg xl:text-lg pb-10">{projectDetails.description}</p>
              <Link
                href={projectDetails.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg border-b-2 border-black"
              >
                {projectDetails.visit}
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

